import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChat } from '@/context/ChatContext';

const FloatingChatBubble = () => {
  const { isChatOpen, toggleChat } = useChat();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setSending(true);

    try {
      if (!webhookUrl) {
        throw new Error('Webhook no configurado');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        text: data.response || 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.',
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Lo sentimos, no pudimos enviar tu mensaje. Por favor, intenta contactarnos por teléfono o email.',
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('es', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isChatOpen ? (
        <div className="w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[600px] bg-brand-graphite border border-brand-ink rounded-lg shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-brand-ink">
            <div>
              <h3 className="font-bold text-brand-whiteSmoke">Black Cat Studio</h3>
              <p className="text-sm text-brand-whiteSmoke/70">En línea</p>
            </div>
            <button
              onClick={toggleChat}
              className="text-brand-whiteSmoke hover:text-brand-whiteSmoke/70 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-brand-whiteSmoke/70 py-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>¡Hola! ¿En qué podemos ayudarte?</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-brand-whiteSmoke text-brand-black'
                      : 'bg-brand-black text-brand-whiteSmoke'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <div className="bg-brand-black text-brand-whiteSmoke rounded-lg p-3">
                  <p className="text-sm">Enviando...</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-brand-ink">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-brand-black border-brand-ink text-brand-whiteSmoke placeholder:text-brand-whiteSmoke/50"
                disabled={sending}
              />
              <Button
                onClick={handleSend}
                disabled={sending || !inputValue.trim()}
                className="bg-brand-whiteSmoke text-brand-black hover:bg-brand-whiteSmoke/90"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          size="lg"
          className="w-16 h-16 rounded-full bg-brand-whiteSmoke text-brand-black hover:bg-brand-whiteSmoke/90 shadow-2xl"
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}
    </div>
  );
};

export default FloatingChatBubble;
