import { useContext, useState } from 'react';
import { createContext } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [createAccount, setCreateAcount] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState('farouk');
  return (
    <GlobalContext.Provider
      value={{
        createAccount,
        setCreateAcount,
        isSideBarOpen,
        setIsSideBarOpen,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
