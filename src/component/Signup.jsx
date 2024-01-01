import styled from 'styled-components';
import { useStudentContext } from '../context/StudentContext';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const Signup = ({ setCreateAcount }) => {
  const { studentList, setStudentList, studentInfos, setStudentInfos } =
    useStudentContext();
  const [inscriptionCompleted, setInscriptionCompleted] = useState(false);
  const { setCurrentUser } = useGlobalContext();
  const saveStudent = () => {
    const { firstName, lastName, email, numberOfInscription, password } =
      studentInfos;
    if (firstName.length === 0) {
      toast.error('please provide a first name');
      return;
    }
    if (lastName.length === 0) {
      toast.error('please provide a last name');
      return;
    }
    if (email.length === 0) {
      toast.error('please provide a email');
      return;
    }
    if (numberOfInscription.length === 0) {
      toast.error('please provide a number of inscription');
      return;
    }
    if (password.length === 0) {
      toast.error('please provide a password');
      return;
    }
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
            type="text"
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

const Wrapper = styled.div`
  width: 50%;
  .have-account {
    background-color: transparent;
    border-color: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
  label {
    color: #919191;
  }
  h1 {
    font-size: 40px;
  }
  form {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .student-id,
    .student-pass {
      display: flex;
      flex-direction: column;
      input {
        border-color: transparent;
        border-bottom: 1px solid grey;
        outline: none;
        padding: 0.5rem 0;
      }
    }
  }
  .submit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .submit-btn {
      width: 100%;
      padding: 0.75rem 0;
      border-color: transparent;
      cursor: pointer;
      background-color: #0073c5;
      border-radius: 5px;
    }
    .forget-password {
      text-decoration: none;
      color: #c4c4c4;
    }
  }
  .welcome {
    text-align: center;
    color: #00165f;
  }
  .go-exam {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
    margin: 2rem auto;
    a {
      color: black;
      font-weight: 600;
      font-size: 16px;
      border-radius: 10px;
      padding: 0.75rem 2rem;
      background-color: #0095ff;
      text-decoration: none;
    }
  }
`;
export default Signup;
