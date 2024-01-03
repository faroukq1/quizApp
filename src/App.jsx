import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Exam from './pages/Exam';
import { useGlobalContext } from './context/GlobalContext';
const App = () => {
  const { exam } = useGlobalContext();
  console.log(exam);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/exam" element={<Exam />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
