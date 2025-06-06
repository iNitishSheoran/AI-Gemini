import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const onSent = async (prompt) => {
    const response = await runChat(prompt);
    const newMessage = { prompt, response };
    setMessages((prev) => [...prev, newMessage]);
    return response;
  };

  const contextValue = {
    onSent,
    messages,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
