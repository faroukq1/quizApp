import React, { useState } from 'react';
import styled from 'styled-components';
import heroPic from '../assets/hero.svg';
import Login from '../component/Login';
import logo from '../assets/logo.jpg';
import Signup from '../component/Signup';
import { useGlobalContext } from '../context/GlobalContext';

const Loginpage = () => {
  const { createAccount, setCreateAcount } = useGlobalContext();
  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="hero">
        <img src={heroPic} alt="hero picture" />
        <div className="desc">
          <h1>Exam Pass is your exam companion.</h1>
          <p>Find,take exam,and view results</p>
        </div>
      </div>
      <div className="form">
        {createAccount ? (
          <Signup setCreateAcount={setCreateAcount} />
        ) : (
          <Login setCreateAcount={setCreateAcount} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  position: relative;
  .logo {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    position: absolute;
    top: 10px;
    right: 30px;
  }
  .form,
  .hero {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero {
    background-color: #0095ff;

    img {
      height: 50%;
      width: 70%;
    }
    .desc {
      width: 60%;
      h1,
      p {
        margin: 1rem 0;
        color: white;
        text-align: center;
      }
    }
  }
  .form {
    height: 100%;
  }
`;

export default Loginpage;
