import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import cardList from '../Data';
const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [createAccount, setCreateAcount] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState('farouk');
  const [currentExam, setCurrentExam] = useState('');
  const [exam, setExam] = useState({});

  const getCurrentExamInfo = () => {
    const exam = cardList.filter((exam) => exam.heading === currentExam);
    return exam;
  };

  useEffect(() => {
    const currentExam = getCurrentExamInfo();
    setExam(currentExam);
  }, [currentExam]);
  return (
    <GlobalContext.Provider
      value={{
        createAccount,
        setCreateAcount,
        isSideBarOpen,
        setIsSideBarOpen,
        currentUser,
        setCurrentUser,
        currentExam,
        setCurrentExam,
        exam,
        setExam,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
