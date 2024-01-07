import styled from 'styled-components';

const Wrapper = styled.article`
  background-color: #1c1b25;
  overflow: hidden;
  transition: 1ms all ease;
  position: relative;
  width: 100%;
  .container {
    background-color: #4e000032;
    border-radius: 1rem;
    padding: 0 10vw;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .question-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    width: 100%;
    h1 {
      margin: 0 0 7rem 0;
      color: white;
      text-align: center;
      font-size: 30px;
    }
    .question {
      margin-top: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      p {
        color: white;
        font-weight: bold;
      }
    }
  }
  .change-btn {
    position: absolute;
    bottom: 15%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .next {
      background-color: #65b741;
    }
    .back {
      background-color: #ff004d;
    }
    .edit {
      background-color: #365486;
    }
    button {
      padding: 0.5rem 2rem;
      outline: none;
      border-color: transparent;
      background-color: white;
      border-radius: 10px;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .answer {
    display: flex;
    gap: 1rem;
    input[type='radio'] {
      width: 20px;
      outline: none;
      border: none;
      color: black;
    }
  }
  .get-test {
    padding: 1rem 2rem;
    background-color: white;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
  }
  .res-btn {
    padding: 0.5rem 2rem;
    background-color: #365486;
    border-radius: 10px;
    text-decoration: none;
    color: white;
  }
`;
export default Wrapper;
