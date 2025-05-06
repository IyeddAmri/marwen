import VisitCard from './VisitCard';
import "./VisitDetails.css"
function Dashboard() {
  const visits = [
    { id: 1, company: 'ABC Corp', date: '2025-06-01', status: 'Available' },
    { id: 2, company: 'XYZ Ltd', date: '2025-06-05', status: 'Full' },
    { id: 3, company: 'Tech Innovators', date: '2025-06-10', status: 'Available' },
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Upcoming Visits</h2>
      <div className="visit-cards-container">
        {visits.map((visit) => (
          <VisitCard key={visit.id} visit={visit} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
