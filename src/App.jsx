import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Exam from './pages/Exam';
import Consultation from './pages/Consultation';
import { useStudentContext } from './context/StudentContext';
import Result from './pages/Result';
const App = () => {
  const { studentNotes } = useStudentContext();
  console.log(studentNotes);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
