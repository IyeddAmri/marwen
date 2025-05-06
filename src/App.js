import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import VisitDetails from './components/VisitDetails';
import FeedbackForm from './components/FeedbackForm';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/visit/:id" element={<VisitDetails />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
