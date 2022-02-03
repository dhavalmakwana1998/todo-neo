import React, { useState } from "react";

export const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isDragging, setIsDragging] = useState(false);
  return (
    <Store.Provider
      value={{
        token,
        setToken,
        isDragging,
        setIsDragging,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </Store.Provider>
  );
};
