import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Tests from '../component/Tests';

const Exam = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Tests />
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
