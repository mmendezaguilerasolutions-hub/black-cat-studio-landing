import { createContext, useContext, useState } from 'react';

const ChatContext = createContext({});

export const ChatProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const value = {
    isChatOpen,
    openChat,
    closeChat,
    toggleChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  return useContext(ChatContext);
};
