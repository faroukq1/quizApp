import styled from 'styled-components';

const Wrapper = styled.nav`
  padding: 0.5rem 2rem;
  color: white;
  background-color: #1c1b25;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #a2a2a753;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  svg {
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
  button {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }
  .hidden {
    display: none !important;
  }
  .ul-links {
    width: 33%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: white;
        padding: 0.25rem 2rem;
        border-radius: 10px;
        background-color: #383747;
      }
    }
  }
`;

export default Wrapper;
