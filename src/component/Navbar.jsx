import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/logo.jpg';
import { useGlobalContext } from '../context/GlobalContext';
import { sideBarContent } from '../Data';
import { Link } from 'react-router-dom';
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
      <ul className={!isSideBarOpen ? 'ul-links' : 'ul-links hidden'}>
        {sideBarContent.map((item) => {
          const { id, name, link } = item;
          return (
            <li key={id}>
              <Link to={link}>{name}</Link>
            </li>
          );
        })}
      </ul>

      <img src={logo} alt="logo" />
    </Wrapper>
  );
};

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

export default Navbar;
