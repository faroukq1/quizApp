import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import { emailTemplate } from '../Data';

const Consultation = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="consult">
          <form>
            <div>
              <label htmlFor="name">First name</label>
              <input type="text" name="first name" id="firstname" />
              <label htmlFor="name">Last name</label>
              <input type="text" name="first name" id="firstname" />
              <label htmlFor="name">Email</label>
              <input type="Email" name="Email" id="Email" />
              <label htmlFor="name">Email</label>
              <input type="Email" name="Email" id="Email" />
              <label htmlFor="name">Email</label>
              <input type="Email" name="Email" id="Email" />
              <label htmlFor="name">Email</label>
              <input type="Email" name="Email" id="Email" />
              <label htmlFor="name">Email</label>
              <input type="Email" name="Email" id="Email" />
              <div className="btn">
                <button>Submit</button>
                <button>Cancel</button>
              </div>
            </div>
            <textarea name="consult" id="" cols="110" rows="10">
              {emailTemplate}
            </textarea>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  .main {
    display: flex;
    height: 95%;
  }
  .consult {
    padding: 5rem;
    height: 100%;
    width: 100%;
    background-color: grey;
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
      width: 40%;
      input {
        padding: 0.3rem 0;
      }
      .btn {
        margin: 2rem 0 0 0;
        width: 100%;
        display: flex;
        gap: 1rem;
        button {
          padding: 0.5rem 2rem;
        }
      }
    }
  }
`;

export default Consultation;
