import styled from 'styled-components';

const Card = ({ img, heading, desc }) => {
  return (
    <Wrapper>
      <img src={img} alt="img" />
      <h1>{heading}</h1>
      <p>{desc}</p>
      <button>pass exam</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  img {
    border-radius: 1rem;
    width: 250px;
    height: 300px;
  }
  h1 {
    margin: 1rem 0;
  }
`;
export default Card;
