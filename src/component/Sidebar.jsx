import Wrapper from '../Styles/Sidebar';
import { useGlobalContext } from '../context/GlobalContext';
import { sideBarContent } from '../Data';
import { TbLogout2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import { useState } from 'react';
const Sidebar = () => {
  const { isSideBarOpen, currentUser } = useGlobalContext();
  const [active, setActive] = useState('Module');
  return (
    <Wrapper className={isSideBarOpen ? '' : 'hide'}>
      <div className="show-border">
        <div className="userInfo">
          <img src={avatar} alt="avatar" />
          <p>
            {currentUser}
            <Link>change Setting</Link>
          </p>
        </div>
        {sideBarContent.map((item) => {
          const { id, name, icon, link } = item;
          return (
            <Link
              to={link}
              className={active === name ? `${name} active` : name}
              key={id}
              onClick={() => setActive(name)}
            >
              {icon}
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
      <Link to="/" className="log-out">
        <TbLogout2 />
        <p>LogOut</p>
      </Link>
    </Wrapper>
  );
};

export default Sidebar;
