import React, { useState } from 'react';
import Wrapper from '../Styles/Login';
import { Link } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../context/GlobalContext';
import spiner from '../assets/spiner.gif';
const Login = ({ setCreateAcount }) => {
  const [loginInfo, setLoginInfo] = useState({ firstName: '', password: '' });
  const [userExist, setUserExist] = useState(false);
  const { studentList } = useStudentContext();
  const { setCurrentUser } = useGlobalContext();
  const [isLogin, setIsLogin] = useState(false);
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
  const countDown = () => {
    setTimeout(() => {
      setIsLogin(true);
    }, 3000);
  };
  if (isLogin) {
    return (
      <Wrapper>
        <Link to="/dashboard" className="plat-form">
          go to the platform
        </Link>
      </Wrapper>
    );
  }
  if (userExist) {
    return (
      <Wrapper>
        <img className="spiner" src={spiner} alt="spiner" />
      </Wrapper>
    );
  }
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
            type="password"
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
              countDown();
              if (checkExistStudent()) {
                toast('Welcom to the test platform');
              }
            }}
          >
            Login
          </button>
        </Link>
        <Link to="/forgetPassword">Forget your passowrd?</Link>
      </div>
    </Wrapper>
  );
};
export default Login;
