import styled from 'styled-components';
import Cards from './Cards';

const DashboardMain = () => {
  return (
    <Wrapper>
      <Cards />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 100vh;
  width: 100%;
  background-color: #1c1b25;
`;

export default DashboardMain;
