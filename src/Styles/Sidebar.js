import styled from 'styled-components';

const Wrapper = styled.aside`
  transition: all ease 0.5s;
  background-color: #1c1b25;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-right: 1px solid #a2a2a753;
  height: 100%;
  .active {
    background-color: #a2a2a753;
    position: relative;
    &:before {
      content: '';
      width: 2px;
      height: 109%;
      background-color: red;
      position: absolute;
      right: -3px;
    }
    svg {
      color: white;
    }
    p {
      color: white;
      font-weight: bold;
    }
  }
  .show-border {
    border-bottom: 1px solid #a2a2a753;
  }
  a {
    background-color: transparent;
    outline: none;
    border-color: transparent;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    cursor: pointer;
    color: #a2a2a7;
    width: 100%;
    svg {
      font-size: 20px;
      margin-left: 1.5rem;
    }
    p {
      font-size: 12px;
      font-weight: 500;
    }
  }
  .log-out,
  a {
    text-decoration: none;
    color: #c02d006e;
    margin-bottom: 1rem;
  }
  .userInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #a2a2a753;
    img {
      margin: 0 0 1rem 1.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid red;
    }
    p {
      font-size: 12px;
      color: #a2a2a7;
      display: flex;
      flex-direction: column;
      a {
        padding: 0;
        color: white;
        font-size: 10px;
        text-decoration: underline;
      }
    }
  }
`;

export default Wrapper;
