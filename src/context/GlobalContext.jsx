import { useContext, useState } from 'react';
import { createContext } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [createAccount, setCreateAcount] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        createAccount,
        setCreateAcount,
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
