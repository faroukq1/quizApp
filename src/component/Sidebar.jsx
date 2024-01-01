import styled from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import { sideBarContent } from '../Data';
import { TbLogout2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
const Sidebar = () => {
  const { isSideBarOpen, currentUser } = useGlobalContext();
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
          const { id, name, icon } = item;
          return (
            <button className={name} key={id}>
              {icon}
              <p>{name}</p>
            </button>
          );
        })}
      </div>
      <Link to="/">
        <button className="log-out">
          <TbLogout2 />
          <p>LogOut</p>
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  transition: all ease 0.5s;
  background-color: #1c1b25;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 0;
  .show-border {
    border-top: 1px solid #a2a2a753;
    border-bottom: 1px solid #a2a2a753;
  }
  button {
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
  }
  .userInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      margin: 1rem 0 1rem 1.5rem;
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
        color: white;
        font-size: 10px;
        text-decoration: underline;
      }
    }
  }
`;

export default Sidebar;
