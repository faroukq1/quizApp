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
    height: 95%;
  }
  .hide {
    transform: translateX(-100%);
    display: none;
    button,
    .userInfo {
      display: none;
    }
  }
`;
export default Dashboard;
