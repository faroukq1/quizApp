import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Test from '../component/Test';

const Exam = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Test />
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
`;

export default Exam;
