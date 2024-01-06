import Wrapper from '../Styles/Navbar';
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

export default Navbar;
