import { useParams, useNavigate } from 'react-router-dom';
import './VisitDetails.css'; // Import the custom CSS file

function VisitDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch real data based on the visit ID
  const visit = {
    company: 'ABC Corp',
    date: '2025-06-01',
    description: 'Visit to ABC Corp for students to explore engineering practices.',
  };

  const handleRegister = () => {
    console.log('Registered for:', visit.company);
    navigate('/dashboard'); // Redirect to dashboard after registration
  };

  const handleFeedback = () => {
    navigate('/feedback'); // Navigate to feedback form page
  };

  return (
    <div className="visit-details-container">
      <div className="visit-details-card">
        <h2 className="visit-company">{visit.company}</h2>
        <p className="visit-date">{visit.date}</p>
        <p className="visit-description">{visit.description}</p>

        <div className="visit-actions">
          <button className="register-button" onClick={handleRegister}>
            Register for Visit
          </button>
          <button className="back-button" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
          <button className="feedback-button" onClick={handleFeedback}>
            Leave Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisitDetails;
