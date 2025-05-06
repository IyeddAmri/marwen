import { useState } from 'react';
import './FeedbackForm.css'; // Importing custom CSS file

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { rating, feedback });
  };

  console.log('Rendering FeedbackForm');  // Debugging line to check component load

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h2 className="feedback-title">Post-Visit Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Rating (1-5)</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="input"
              placeholder="Rate out of 5"
            />
          </div>
          <div className="form-group">
            <label className="label">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Write your feedback here"
            />
          </div>
          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
