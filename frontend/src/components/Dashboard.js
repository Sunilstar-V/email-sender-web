import React from 'react';
import EmailForm from './EmailForm';
import StatusTable from './StatusTable';
import AnalyticsChart from './AnalyticsChart';
import './styles.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Email Sending Dashboard</h1> {/* Add a title for clarity */}
            <EmailForm />
            <StatusTable />
            <AnalyticsChart />
        </div>
    );
}

export default Dashboard;