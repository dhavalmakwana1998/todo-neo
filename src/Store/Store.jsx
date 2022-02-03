import React, { useState } from "react";

export const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Store.Provider
      value={{
        currentUser,
        setCurrentUser,
        isDragging,
        setIsDragging,
      }}
    >
      {children}
    </Store.Provider>
  );
};
