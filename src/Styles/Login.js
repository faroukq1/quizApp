import styled from 'styled-components';

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

export default Wrapper;
