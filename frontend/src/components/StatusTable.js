import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StatusTable() {
    const [emails, setEmails] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchEmailStatus = async () => {
            try {
                const response = await axios.get('/api/email-status');
                console.log("Fetched email status:", response.data); // Log the fetched data
                setEmails(response.data); // Set state with fetched data
            } catch (error) {
                console.error("Failed to fetch email status", error);
            }
        };

        fetchEmailStatus();
        const interval = setInterval(fetchEmailStatus, 5000);  // Poll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="status-table">
            <h2>Email Status</h2>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Delivery Status</th>
                        <th>Opened</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(emails) && emails.length > 0 ? (
                        emails.map((email) => (
                            <tr key={email.id}>
                                <td>{email.companyName}</td>
                                <td>{email.email}</td>
                                <td>{email.sendStatus}</td>
                                <td>{email.deliveryStatus}</td>
                                <td>{email.opened ? "Yes" : "No"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No email status available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default StatusTable;
