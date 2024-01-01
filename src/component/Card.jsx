import styled from 'styled-components';

const Card = ({ img, heading, desc }) => {
  return (
    <Wrapper>
      <img src={img} alt="img" />
      <div className="desc-holder">
        <h1>{heading}</h1>
        <p>{desc}</p>
        <button>pass exam</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: rgb(53, 51, 65);
  padding: 1.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  max-width: 350px;
  box-shadow: 4px 5px 17px 11px rgba(53, 51, 65, 0.35);
  -webkit-box-shadow: 4px 5px 17px 11px rgba(53, 51, 65, 0.35);
  -moz-box-shadow: 4px 5px 17px 11px rgba(53, 51, 65, 0.35);
  img {
    border-radius: 1rem;
    width: 100%;
    height: 300px;
  }
  .desc-holder {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    h1 {
      color: white;
    }
    p {
      color: #a2a2a7;
    }
    button {
      outline: none;
      border-color: transparent;
      background-color: #0073c5;
      padding: 0.5rem 0;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      color: white;
    }
  }
`;
export default Card;
