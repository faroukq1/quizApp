import Wrapper from '../Styles/Cards';
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

export default Cards;
