import styled from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import { sideBarContent } from '../Data';
const Sidebar = () => {
  const { isSideBarOpen } = useGlobalContext();
  return (
    <Wrapper className={isSideBarOpen ? '' : 'hide'}>
      {sideBarContent.map((item) => {
        const { id, name, icon } = item;
        return (
          <button className={name} key={id}>
            {icon}
            <p>{name}</p>
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  transition: all ease 0.5s;
  background-color: #0095ff;
  width: 20%;
  height: 100%;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  button {
    background-color: white;
    outline: none;
    border-color: transparent;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    cursor: pointer;
    svg {
      font-size: 40px;
      margin-left: 1.5rem;
    }
    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export default Sidebar;
