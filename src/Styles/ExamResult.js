import styled from 'styled-components';

const Wrapper = styled.article`
  height: 100vh;
  width: 100%;
  background-color: #1c1b25;
  display: flex;
  gap: 1rem;
  > div {
    margin: 0.25rem 0;
    border-radius: 1rem;
    height: fit-content;
    border: 1px solid grey;
    padding: 2rem;
    h1,
    h2,
    p {
      color: white;
      font-size: 16px;
    }
    h1 {
      margin: 1rem 0;
      color: grey;
      font-size: 30px;
    }
    > div {
      h2 {
        color: #365486;
        font-size: 14px;
      }
      > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.25rem 0;
        svg {
          color: white;
          border: 1px solid white;
          border-radius: 50%;
          font-size: 20px;
          padding: 0.25rem;
        }
        p {
          font-weight: 500;
        }
      }
    }
  }
  .show-ans {
    margin: 1rem 0;
    padding: 0.5rem 2rem;
    background-color: #365486;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: grey;
    font-weight: bold;
  }
  .hidden-exam {
    height: 50%;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 200px;
      height: 200px;
    }
    a {
      color: white;
      text-decoration: none;
      background-color: #365486;
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 1rem 2rem;
      font-weight: bold;
    }
  }
`;
export default Wrapper;
