import { createContext, useContext, useState } from 'react';
import { students } from '../Data';
const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentList, setStudentList] = useState(students);
  const [studentInfos, setStudentInfos] = useState({
    firstName: '',
    lastName: '',
    email: '',
    numberOfInscription: 0,
    password: '',
    marks: [],
  });
  return (
    <StudentContext.Provider
      value={{ studentList, setStudentList, studentInfos, setStudentInfos }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  return useContext(StudentContext);
};
