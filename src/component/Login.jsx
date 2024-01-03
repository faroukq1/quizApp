import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../context/GlobalContext';

const Login = ({ setCreateAcount }) => {
  const [loginInfo, setLoginInfo] = useState({ firstName: '', password: '' });
  const [userExist, setUserExist] = useState(false);
  const { studentList } = useStudentContext();
  const { setCurrentUser } = useGlobalContext();

  const checkExistStudent = () => {
    const { firstName, password } = loginInfo;
    if (firstName.length === 0) return toast.error('please provide a name');
    if (password.length === 0) return toast.error('please provide a password');
    const user = studentList.filter(
      (item) => item.firstName === firstName && item.password === password
    );
    setCurrentUser(firstName);
    setUserExist(true);
    return user.length > 0;
  };
  return (
    <Wrapper>
      <h1>Login</h1>
      <button onClick={() => setCreateAcount(true)} className="create-account">
        You didn't have account?
      </button>
      <form action="POST">
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
        <Link className="submit-btn" to={userExist ? '/dashboard' : '/'}>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (checkExistStudent()) {
                toast('Welcom to the test platform');
              }
            }}
          >
            go to the platform
          </button>
        </Link>
        <Link to="/forgetPassword">Forget your passowrd?</Link>
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
      background-color: #0095ff;
      padding: 0.75rem 3rem;
      border-radius: 10px;
      button {
        cursor: pointer;
        background-color: transparent;
        outline: none;
        border-color: transparent;
        color: white;
        font-weight: 600;
      }
    }
    .forget-password {
      text-decoration: none;
      color: #c4c4c4;
    }
  }
`;
export default Login;
