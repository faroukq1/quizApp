import Wrapper from "../Styles/Signup";
import { useStudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Signup = ({ setCreateAcount }) => {
  const { studentList, setStudentList, studentInfos, setStudentInfos } =
    useStudentContext();
  const [inscriptionCompleted, setInscriptionCompleted] = useState(false);
  const { setCurrentUser } = useGlobalContext();
  const saveStudent = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, numberOfInscription, password } =
      studentInfos;
    if (firstName.length === 0) return toast.error("provide first name");
    if (lastName.length === 0) return toast.error("provide last name");
    if (email.length === 0) return toast.error("provide email");
    if (numberOfInscription.length === 0)
      return toast.error("provide number of inscription");
    if (password.length === 0) return toast.error("provide password");

    toast.success(`welcom ${firstName} , have a good luck`);
    setStudentList([...studentList, studentInfos]);
    setInscriptionCompleted(true);
    setCurrentUser(firstName);
  };
  if (inscriptionCompleted) {
    return (
      <Wrapper>
        <h1 className="welcome">Welcom to the test platform</h1>
        <button onClick={() => setCreateAcount(false)} className="go-exam">
          <Link to="/">Go to the exams</Link>
        </button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <button onClick={() => setCreateAcount(false)} className="have-account">
        You already have account?
      </button>
      <form action="POST">
        <div className="student-id">
          <label htmlFor="studentId">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              setStudentInfos({ ...studentInfos, firstName: e.target.value });
            }}
          />
        </div>
        <div className="student-pass">
          <label htmlFor="studentLastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => {
              setStudentInfos({ ...studentInfos, lastName: e.target.value });
            }}
          />
        </div>
        <div className="student-pass">
          <label htmlFor="password">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setStudentInfos({ ...studentInfos, email: e.target.value });
            }}
          />
        </div>
        <div className="student-pass">
          <label htmlFor="password">Number of inscription</label>
          <input
            type="text"
            name="numberOfInscription"
            onChange={(e) => {
              setStudentInfos({
                ...studentInfos,
                numberOfInscription: e.target.value,
              });
            }}
          />
        </div>
        <div className="student-pass">
          <label htmlFor="password">passowrd</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setStudentInfos({ ...studentInfos, password: e.target.value });
            }}
          />
        </div>
      </form>
      <div className="submit">
        <button className="submit-btn" onClick={saveStudent}>
          Sign Up
        </button>
      </div>
    </Wrapper>
  );
};

export default Signup;
