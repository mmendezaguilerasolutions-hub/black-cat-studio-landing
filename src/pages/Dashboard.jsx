import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-black text-foreground">Dashboard</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Volver al inicio
          </Button>
        </div>

        {user ? (
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-bold mb-4">Bienvenido</h2>
              <p className="text-muted-foreground mb-4">
                Email: {user.email}
              </p>
              <Button onClick={handleSignOut} variant="destructive">
                Cerrar sesión
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Panel de Administración</h3>
              <p className="text-muted-foreground">
                Esta sección está en desarrollo. Próximamente podrás gestionar citas, artistas y más.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Acceso requerido</h2>
            <p className="text-muted-foreground mb-4">
              Debes iniciar sesión para acceder al dashboard.
            </p>
            <p className="text-sm text-muted-foreground">
              Esta funcionalidad está en desarrollo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
