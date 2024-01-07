import styled from "styled-components";

const Wrapper = styled.main`
  .textarea {
    padding: 1rem;
    background-color: transparent;
    outline: none;
  }
  position: relative;
  height: 100vh;
  .main {
    display: flex;
    height: 95%;
  }
  .consult {
    background-color: #1c1b25;
    padding: 1rem 5rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  form {
    width: 100%;
    display: flex;
    gap: 1rem;
    > div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 40%;

      label {
        color: white;
        margin-bottom: 10px;
      }
      input {
        padding: 0.5rem;
        font-weight: bold;
        color: white;
        outline: none;
        border: 1px solid grey;
        background-color: transparent;
      }
      .btn {
        margin: 1rem 0 0 0;
        width: 100%;
        display: flex;
        gap: 1rem;
        button {
          padding: 0.5rem 2rem;
          outline: none;
          border: transparent;
          border-radius: 1rem;
          font-weight: bold;
          color: white;
          cursor: pointer;
        }
        .submit {
          background-color: #00ff73;
        }
        .cancel {
          background-color: #ff0000;
        }
      }
    }
  }
  .select {
    background-color: transparent;
    padding: 1rem;
    color: white;
    option {
      color: black;
      background-color: transparent;
      padding: 1rem;
    }
  }
`;
export default Wrapper;
