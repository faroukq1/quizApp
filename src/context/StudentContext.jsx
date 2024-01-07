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
  const [studentNotes, setStudentNotes] = useState({
    Algorithm: 0,
    Assembly: 0,
    ObjectOriented: 0,
  });
  const [finishedExam, setFinishedExam] = useState({
    Algorithm: false,
    Assembly: false,
    ObjectOriented: false,
  });
  return (
    <StudentContext.Provider
      value={{
        studentList,
        setStudentList,
        studentInfos,
        setStudentInfos,
        studentNotes,
        setStudentNotes,
        finishedExam,
        setFinishedExam,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  return useContext(StudentContext);
};
