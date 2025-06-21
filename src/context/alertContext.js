import { createContext, useContext, useState } from "react";

// Initialize with default values to prevent undefined context usage
const AlertContext = createContext({
  isOpen: false,
  type: '',
  message: '',
  onOpen: () => {},
  onClose: () => {},
});

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const onOpen = (type, message) => {
    setState({
      isOpen: true,
      type,
      message,
    });
  };

  const onClose = () => {
    setState({
      isOpen: false,
      type: '',
      message: '',
    });
  };

  return (
    <AlertContext.Provider value={{ ...state, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to consume context
export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
