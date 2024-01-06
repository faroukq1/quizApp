import Wrapper from '../Styles/Test';
import { useGlobalContext } from '../context/GlobalContext';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useStudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';

const Tests = () => {
  const { exam } = useGlobalContext();
  const { studentNotes, setStudentNotes } = useStudentContext();
  const [currentItem, setCurrentItem] = useState(0);
  const [disbleTest, setDisableTest] = useState(false);
  const examQestionList = exam[0]?.question || [];
  const examName = exam[0]?.heading;
  const next = () =>
    setCurrentItem((prev) =>
      prev === 0
        ? (prev = examQestionList.length - 1)
        : (prev - 1) % examQestionList.length
    );
  const back = () =>
    setCurrentItem((prev) => (prev + 1) % examQestionList.length);

  if (!examQestionList.length) {
    return (
      <Wrapper>
        <div className="question-container">
          <div className="container">
            <h1>Please take Test</h1>
            <Link className="get-test" to="/dashboard">
              Click Here
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }
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
                      disabled={disbleTest}
                      onClick={() => {
                        setDisableTest(true);
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
        <button className="back" onClick={back}>
          Back
        </button>
        <button
          className="edit"
          disabled={!disbleTest}
          onClick={() => {
            setStudentNotes({
              ...studentNotes,
              [examName]:
                studentNotes[examName] > 0 ? studentNotes[examName] - 2 : 0,
            });
            setDisableTest(false);
          }}
        >
          Edit
        </button>
        <button className="next" onClick={next}>
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default Tests;
