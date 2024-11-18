import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import axios from 'axios';

// Register the ArcElement
Chart.register(ArcElement);

function AnalyticsChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await axios.get('/api/email-analytics');
        const data = response.data;
        setChartData({
          labels: ['Sent', 'Scheduled', 'Failed', 'Delivered', 'Bounced'],
          datasets: [
            {
              data: [data.sent, data.scheduled, data.failed, data.delivered, data.bounced],
              backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#2196f3', '#9c27b0'],
            },
          ],
        });
      } catch (error) {
        console.error("Failed to fetch analytics data", error);
      }
    };

    fetchAnalyticsData();
  }, []);

  return (
    <div className="analytics-chart">
      <h2>Email Analytics</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default AnalyticsChart;
