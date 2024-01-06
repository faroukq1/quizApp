import styled from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useStudentContext } from '../context/StudentContext';

const Tests = () => {
  const { exam } = useGlobalContext();
  const { studentNotes, setStudentNotes } = useStudentContext();
  const [currentItem, setCurrentItem] = useState(0);
  const examQestionList = exam[0]?.question || [];
  const examName = exam[0]?.heading;
  return (
    <Wrapper>
      {examQestionList.map((exam) => {
        const { question, answers } = exam;
        return (
          <div
            className="question-container"
            style={{ transform: `translateY(${-currentItem * 100}%)` }}
            key={nanoid()}
          >
            <div className="container">
              <h1>{question}</h1>
              <div className="question">
                {answers.map((ans, index) => (
                  <div key={index} className="answer">
                    <input
                      type="radio"
                      onChange={() => {
                        index === 1 &&
                          setStudentNotes({
                            ...studentNotes,
                            [examName]: studentNotes[examName] + 2,
                          });
                      }}
                    />
                    <p key={nanoid()}>{ans}</p>
                  </div>
                ))}
              </div>
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
  .container {
    background-color: #4e000032;
    border-radius: 1rem;
    padding: 0 10vw;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .question-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    width: 100%;
    h1 {
      margin: 0 0 7rem 0;
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
    bottom: 15%;
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
  .answer {
    display: flex;
    gap: 1rem;
    input[type='radio'] {
      width: 20px;
      outline: none;
      border: none;
      color: black;
    }
  }
`;
export default Tests;
