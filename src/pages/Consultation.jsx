import Wrapper from "../Styles/Consultation";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { emailTemplate } from "../Data";
import { useStudentContext } from "../context/StudentContext";
import { nanoid } from "nanoid";

const Consultation = () => {
  const { studentInfos } = useStudentContext();
  const { firstName, lastName, email, numberOfInscription } = studentInfos;
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
                value={firstName || "unknown"}
                readOnly
                type="text"
                name="first name"
                id="firstname"
              />
              <label htmlFor="name">Last Name</label>
              <input
                value={lastName || "unknown"}
                readOnly
                type="text"
                name="first name"
                id="firstname"
              />
              <label htmlFor="name">Email</label>
              <input
                value={email || "unknow@uknown.com"}
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

export default Consultation;
