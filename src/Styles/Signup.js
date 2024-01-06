import styled from 'styled-components';

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

export default Wrapper;
