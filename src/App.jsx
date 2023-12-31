import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gg" element={<Loginpage />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
