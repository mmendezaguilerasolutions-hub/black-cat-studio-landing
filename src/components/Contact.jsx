import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().min(9, 'El teléfono debe tener al menos 9 dígitos'),
  email: z.string().email('Email inválido'),
  artistId: z.string().min(1, 'Selecciona un artista'),
  serviceId: z.string().min(1, 'Selecciona un servicio'),
  date: z.date({ required_error: 'Selecciona una fecha' }),
  time: z.string().min(1, 'Selecciona una hora'),
  message: z.string().optional(),
});

const Contact = () => {
  const [artists, setArtists] = useState([]);
  const [services, setServices] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const selectedArtistId = watch('artistId');
  const selectedServiceId = watch('serviceId');
  const selectedDate = watch('date');

  useEffect(() => {
    fetchArtists();
  }, []);

  useEffect(() => {
    if (selectedArtistId) {
      fetchArtistServices(selectedArtistId);
      setValue('serviceId', '');
      setValue('date', undefined);
      setValue('time', '');
    }
  }, [selectedArtistId, setValue]);

  useEffect(() => {
    if (selectedArtistId && selectedServiceId && selectedDate) {
      fetchAvailableSlots();
    }
  }, [selectedArtistId, selectedServiceId, selectedDate]);

  const fetchArtists = async () => {
    try {
      const { data, error } = await supabase
        .from('artists')
        .select('id, name')
        .eq('is_active', true);

      if (error) throw error;
      setArtists(data || []);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  const fetchArtistServices = async (artistId) => {
    try {
      const { data, error } = await supabase
        .from('artist_services')
        .select(`
          service_id,
          services (id, name, default_duration_minutes)
        `)
        .eq('artist_id', artistId)
        .eq('is_active', true);

      if (error) throw error;

      const servicesList = data?.map((item) => ({
        id: item.services.id,
        name: item.services.name,
      })) || [];

      setServices(servicesList);
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices([]);
    }
  };

  const fetchAvailableSlots = async () => {
    setLoadingSlots(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-available-slots', {
        body: {
          artistId: selectedArtistId,
          serviceId: selectedServiceId,
          date: format(selectedDate, 'yyyy-MM-dd'),
        },
      });

      if (error) throw error;
      setAvailableSlots(data?.slots || []);
    } catch (error) {
      console.error('Error fetching slots:', error);
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const { data: result, error } = await supabase.functions.invoke('create-appointment', {
        body: {
          artistId: data.artistId,
          serviceId: data.serviceId,
          slotIso: data.time,
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message || '',
        },
      });

      if (error) throw error;

      const artist = artists.find((a) => a.id === data.artistId);
      const service = services.find((s) => s.id === data.serviceId);

      setConfirmationData({
        artist: artist?.name,
        service: service?.name,
        date: format(selectedDate, 'dd/MM/yyyy', { locale: es }),
        time: format(new Date(data.time), 'HH:mm', { locale: es }),
      });

      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
        setConfirmationData(null);
      }, 5000);
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Error al confirmar la cita. Por favor, inténtalo de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success && confirmationData) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-8">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black mb-4">¡Cita Confirmada!</h3>
              <p className="text-lg mb-6">
                Tu cita ha sido confirmada con éxito. Recibirás un email de confirmación en breve.
              </p>
              <div className="bg-card p-6 rounded-lg text-left space-y-2">
                <p><strong>Artista:</strong> {confirmationData.artist}</p>
                <p><strong>Servicio:</strong> {confirmationData.service}</p>
                <p><strong>Fecha:</strong> {confirmationData.date}</p>
                <p><strong>Hora:</strong> {confirmationData.time}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
              Reserva tu cita
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Tu nombre"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="Tu teléfono"
                  className="mt-1"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="tu@email.com"
                className="mt-1"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Artist */}
              <div>
                <Label htmlFor="artist">Artista *</Label>
                <Select onValueChange={(value) => setValue('artistId', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona un artista" />
                  </SelectTrigger>
                  <SelectContent>
                    {artists.map((artist) => (
                      <SelectItem key={artist.id} value={artist.id}>
                        {artist.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.artistId && (
                  <p className="text-destructive text-sm mt-1">{errors.artistId.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <Label htmlFor="service">Servicio *</Label>
                <Select
                  onValueChange={(value) => setValue('serviceId', value)}
                  disabled={!selectedArtistId}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceId && (
                  <p className="text-destructive text-sm mt-1">{errors.serviceId.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <Label>Fecha *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal mt-1',
                        !selectedDate && 'text-muted-foreground'
                      )}
                      disabled={!selectedServiceId}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, 'PPP', { locale: es }) : 'Selecciona una fecha'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setValue('date', date);
                        setValue('time', '');
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <p className="text-destructive text-sm mt-1">{errors.date.message}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <Label htmlFor="time">Hora *</Label>
                <Select
                  onValueChange={(value) => setValue('time', value)}
                  disabled={!selectedDate || loadingSlots}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue
                      placeholder={
                        loadingSlots
                          ? 'Calculando horarios...'
                          : availableSlots.length === 0
                          ? 'No hay horas disponibles'
                          : 'Selecciona una hora'
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {format(new Date(slot), 'HH:mm', { locale: es })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="text-destructive text-sm mt-1">{errors.time.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Mensaje (opcional)</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Cuéntanos sobre tu idea de tatuaje..."
                rows={4}
                className="mt-1"
              />
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? 'Confirmando...' : 'Confirmar cita'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
