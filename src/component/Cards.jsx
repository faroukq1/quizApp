import styled from 'styled-components';
import { cardList } from '../Data';
import Card from './Card';
const Cards = () => {
  return (
    <Wrapper>
      {cardList.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

export default Cards;
