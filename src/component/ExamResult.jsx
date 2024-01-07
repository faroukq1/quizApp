import React, { useState } from 'react';
import Wrapper from '../Styles/ExamResult';
import { answers } from '../Data';
import { useStudentContext } from '../context/StudentContext';
import { MdDone } from 'react-icons/md';
import err from '../assets/err.svg';
import { Link } from 'react-router-dom';
const ExamResult = () => {
  const { studentNotes, finishedExam } = useStudentContext();
  const [questionNumber, setQestionNumber] = useState(5);
  return (
    <Wrapper>
      {answers.map((answer) => {
        const { id, heading, question } = answer;
        return finishedExam[heading] ? (
          <div className="heading" key={id}>
            <h1>
              {heading} :
              <span className={studentNotes[heading] >= 10 ? 'green' : 'red'}>
                {studentNotes[heading]}
              </span>
            </h1>
            {/* <img src={img} alt={heading} /> */}
            {question.slice(0, questionNumber).map((quest, index) => {
              const { question, answers: ans } = quest;
              return (
                <div key={index}>
                  <h2>{question}</h2>
                  <div>
                    <MdDone />
                    <p>{ans}</p>
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => setQestionNumber((prev) => (prev == 5 ? 10 : 5))}
              className="show-ans"
            >
              {questionNumber === 5 ? 'Show answers' : 'Hide answers'}
            </button>
          </div>
        ) : (
          <div className="hidden-exam" key={id}>
            <img src={err} alt="err" />
            <Link to="/dashboard">Please pass the test</Link>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ExamResult;
