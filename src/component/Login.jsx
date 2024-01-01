import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../context/GlobalContext';

const Login = ({ setCreateAcount }) => {
  const [loginInfo, setLoginInfo] = useState({ firstName: '', password: '' });
  const [active, setactive] = useState(false);
  const { studentList } = useStudentContext();
  const { setCurrentUser } = useGlobalContext();
  const checkExistStudent = () => {
    const { firstName, password } = loginInfo;
    if (firstName.length === 0) {
      toast.error('please provide a name');
      return;
    }
    if (password.length === 0) {
      toast.error('please provide a password');
      return;
    }
    const user = studentList.filter(
      (item) => item.firstName === firstName && item.password === password
    );
    setCurrentUser(firstName);
    return user.length > 0;
  };
  return (
    <Wrapper>
      <h1 className={active ? 'hide' : ''}>Login</h1>
      <button
        onClick={() => setCreateAcount(true)}
        className={active ? 'hide' : 'create-account'}
      >
        You didn't have account?
      </button>
      <form action="POST" className={active ? 'hide' : ''}>
        <div className="student-id">
          <label htmlFor="studentId">Student name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, firstName: e.target.value })
            }
          />
        </div>
        <div className="student-pass">
          <label htmlFor="password">password</label>
          <input
            type="passsword"
            name="password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
        </div>
      </form>
      <div className="submit">
        <button
          className="submit-btn"
          disabled={active}
          onClick={() => {
            if (checkExistStudent()) {
              toast('Welcom to the test platform');
              setactive(true);
            }
          }}
        >
          {!active ? 'login' : <Link to="dashboard">go to the platform</Link>}
        </button>
        <Link
          className={active ? 'hide' : 'forget-password'}
          to="/forgetPassword"
        >
          Forget your passowrd?
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hide {
    display: none;
  }
  width: 50%;
  a {
    text-decoration: none;
    color: white;
    font-size: 600;
  }
  .create-account {
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
      color: white;
    }
    .forget-password {
      text-decoration: none;
      color: #c4c4c4;
    }
  }
`;
export default Login;
