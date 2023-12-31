import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/logo.jpg';
import { useGlobalContext } from '../context/GlobalContext';
const Navbar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();
  return (
    <Wrapper>
      {isSideBarOpen ? (
        <button className="close" onClick={() => setIsSideBarOpen(false)}>
          <MdOutlineClose />
        </button>
      ) : (
        <button className="burger" onClick={() => setIsSideBarOpen(true)}>
          <GiHamburgerMenu />
        </button>
      )}
      <img src={logo} alt="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 1rem 4rem;
  color: white;
  background-color: #0095ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 40px;
    height: 40px;
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
`;

export default Navbar;
