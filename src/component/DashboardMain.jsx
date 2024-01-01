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
  background-color: grey;
  height: 100vh;
  width: 100%;
`;

export default DashboardMain;
