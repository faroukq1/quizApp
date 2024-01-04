import styled from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const Tests = () => {
  const { exam } = useGlobalContext();
  const [currentItem, setCurrentItem] = useState(0);
  const examQestionList = exam[0]?.question || [];
  console.log(currentItem);
  return (
    <Wrapper>
      {examQestionList.map((exam) => {
        const { question, answers } = exam;
        return (
          <div
            className="question-container"
            style={{ transform: `translateY(${-currentItem * 105}%)` }}
            key={nanoid()}
          >
            <h1>{question}</h1>
            <div className="question">
              {answers.map((ans) => (
                <p key={nanoid()}>{ans}</p>
              ))}
            </div>
          </div>
        );
      })}
      <div className="change-btn">
        <button
          onClick={() =>
            setCurrentItem((prev) =>
              prev === 0
                ? (prev = examQestionList.length - 1)
                : (prev - 1) % examQestionList.length
            )
          }
        >
          Back
        </button>
        <button
          onClick={() =>
            setCurrentItem((prev) => (prev + 1) % examQestionList.length)
          }
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: #1c1b25;
  overflow: hidden;
  transition: 1ms all ease;
  position: relative;
  .question-container {
    padding: 3rem;
    background-color: #4e000032;
    margin: 2rem auto 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    height: 90%;
    width: 70%;
    border-radius: 1rem;
    h1 {
      margin: 2rem 0 0 0;
      color: white;
      text-align: center;
      font-size: 30px;
    }
    .question {
      margin-top: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      p {
        color: white;
        font-weight: bold;
      }
    }
  }
  .change-btn {
    position: absolute;
    bottom: 20%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    button {
      padding: 0.5rem 2rem;
      outline: none;
      border-color: transparent;
      background-color: white;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
export default Tests;
