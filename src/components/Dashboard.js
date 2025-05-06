import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const visits = [
    { id: 1, company: 'ABC Corp', date: '2025-06-01', status: 'Available' },
    { id: 2, company: 'XYZ Ltd', date: '2025-06-05', status: 'Full' },
    { id: 3, company: 'Tech Innovators', date: '2025-06-10', status: 'Available' },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Upcoming Visits</h2>
      <div className="visits-grid">
        {visits.map((visit) => (
          <div key={visit.id} className="visit-card">
            <h3 className="visit-company">{visit.company}</h3>
            <p className="visit-date">{visit.date}</p>
            <p className="visit-status">Status: {visit.status}</p>
            {visit.status === 'Available' ? (
              <Link to={`/visit/${visit.id}`} className="visit-link">Register for this visit</Link>
            ) : (
              <p className="visit-full">Fully booked</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
