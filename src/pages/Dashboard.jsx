import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import DashboardMain from '../component/DashboardMain';

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="main">
        <Sidebar />
        <DashboardMain />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  .main {
    display: flex;
    height: calc(100% - 4.7rem);
  }
  .hide {
    transform: translateX(-100%);
    button,
    .userInfo {
      transition: 0.3s all ease;
      display: none;
    }
  }
`;
export default Dashboard;
