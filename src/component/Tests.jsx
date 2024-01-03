import styled from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import { nanoid } from 'nanoid';

const Tests = () => {
  const { exam } = useGlobalContext();
  const examQestionList = exam[0]?.question || [];
  const id = exam.id;
  return (
    <Wrapper>
      {examQestionList.map((exam) => {
        const { question, answers } = exam;
        return (
          <div className="question-container" key={nanoid()}>
            <h1>{question}</h1>
            <div className="question">
              {answers.map((ans) => (
                <p key={nanoid()}>{ans}</p>
              ))}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 100%;
  width: 100%;
  background-color: #1c1b25;
  .question-container {
    padding: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    width: 100%;
    h1 {
      color: white;
      text-align: center;
      font-size: 30px;
    }
    .question {
      margin-top: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      p {
        color: white;
        font-weight: bold;
      }
    }
  }
`;
export default Tests;
