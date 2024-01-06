import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import { emailTemplate } from '../Data';
import { useStudentContext } from '../context/StudentContext';
import { nanoid } from 'nanoid';

const Consultation = () => {
  const { studentInfos } = useStudentContext();
  const { firstName, lastName, email, numberOfInscription } = studentInfos;
  console.log(studentInfos);
  return (
    <Wrapper>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="consult">
          <form>
            <div>
              <label htmlFor="name">First Name</label>
              <input
                value={firstName || 'unknown'}
                readOnly
                type="text"
                name="first name"
                id="firstname"
              />
              <label htmlFor="name">Last Name</label>
              <input
                value={lastName || 'unknown'}
                readOnly
                type="text"
                name="first name"
                id="firstname"
              />
              <label htmlFor="name">Email</label>
              <input
                value={email || 'unknow@uknown.com'}
                readOnly
                type="Email"
                name="Email"
                id="Email"
              />
              <label htmlFor="name">number of inscription</label>
              <input
                value={numberOfInscription}
                readOnly
                type="text"
                name="Email"
                id="Email"
              />
              <label htmlFor="name">University</label>
              <input
                value={`'l'université Badji Mokhtar - Annaba`}
                readOnly
                type="Email"
                name="Email"
                id="Email"
              />
              <label htmlFor="name">Consultation Id</label>
              <input
                value={nanoid()}
                readOnly
                type="Email"
                name="Email"
                id="Email"
              />
              <label htmlFor="name">Module</label>
              <select className="select">
                <option value="1">Algorithm</option>
                <option value="2">Assembly</option>
                <option value="3">OOP</option>
              </select>
              <div className="btn">
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
            <textarea
              className="textarea"
              name="consult"
              id=""
              cols="110"
              rows="10"
              placeholder={emailTemplate}
            ></textarea>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .textarea {
    padding: 1rem;
    background-color: transparent;
    outline: none;
  }
  position: relative;
  height: 100vh;
  .main {
    display: flex;
    height: 95%;
  }
  .consult {
    background-color: #1c1b25;
    padding: 5rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  form {
    width: 100%;
    display: flex;
    gap: 2rem;
    > div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 40%;

      label {
        color: white;
        margin-bottom: 10px;
      }
      input {
        padding: 1rem 0.5rem;
        font-weight: bold;
        color: white;
        outline: none;
        border: 1px solid grey;
        background-color: transparent;
      }
      .btn {
        margin: 2rem 0 0 0;
        width: 100%;
        display: flex;
        gap: 1rem;
        button {
          padding: 0.5rem 2rem;
          outline: none;
          border: transparent;
          border-radius: 1rem;
          font-weight: bold;
          color: white;
          cursor: pointer;
        }
        .submit {
          background-color: #00ff73;
        }
        .cancel {
          background-color: #ff0000;
        }
      }
    }
  }
  .select {
    background-color: transparent;
    padding: 1rem;
    color: white;
    option {
      color: black;
      background-color: transparent;
      padding: 1rem;
    }
  }
`;

export default Consultation;
