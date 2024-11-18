import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [email, setEmail] = useState(''); // Initialize as an empty string
  const [file, setFile] = useState(null); // Initialize as null
  const [prompt, setPrompt] = useState(''); // Initialize as an empty string
  const [schedule, setSchedule] = useState('immediate');

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to backend for email configuration and scheduling
    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);
    formData.append('prompt', prompt);
    formData.append('schedule', schedule);

    try {
      await axios.post('/api/send-emails', formData);
      alert('Emails scheduled successfully');
    } catch (error) {
      alert('Failed to schedule emails');
    }
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <h2>Email Configuration</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>CSV or Google Sheet:</label>
      <input type="file" onChange={handleFileChange} required />
      <label>Prompt:</label>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} required />
      <label>Schedule:</label>
      <select value={schedule} onChange={(e) => setSchedule(e.target.value)}>
        <option value="immediate">Send Now</option>
        <option value="schedule">Schedule</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailForm;
