import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import Wrapper from '../Styles/Card';
const Card = ({ img, heading, desc }) => {
  const { setCurrentExam } = useGlobalContext();
  return (
    <Wrapper>
      <img src={img} alt="img" />
      <div className="desc-holder">
        <h1>{heading}</h1>
        <p>{desc}</p>
        <button
          onClick={() => {
            setCurrentExam(heading);
          }}
        >
          <Link to="/exam">pass exam</Link>
        </button>
      </div>
    </Wrapper>
  );
};

export default Card;
