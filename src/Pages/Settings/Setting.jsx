import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';
import './Setting.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

// Custom CountUp component
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = (end / duration) * 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>${count.toLocaleString()}</span>;
};

// Sample static data for the Line chart
const staticReferralData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Referrals',
      data: [10, 20, 15, 25, 30],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const Setting = ({ data = staticReferralData }) => {
  const settings = {
    rewardAmount: 5000,
    referralCodeExpiration: 30,
    minReferralsForBonus: 10,
    bonusAmount: 1500,
  };

  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const chartDataPie = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <section>
        <Container style={{ height: '250px' }}>
          <Row className='d-flex align-items-center'>
            <Col md={4} className='d-flex justify-content-md-start mb-3 mb-md-0'>
              <div style={{ marginRight: '20px' }}>
                <img
                  src='https://via.placeholder.com/150'
                  alt='Profile'
                  className='img-fluid rounded-circle'
                  style={{ maxWidth: '150px' }}
                />
              </div>
            </Col>
            <Col md={8} className='text-center text-md-start'>
              <h2 className='mb-4'>John Doe</h2>
              <p className='mb-2'><strong>Email:</strong> john.doe@example.com</p>
              <p className='mb-2'><strong>Member Since:</strong> January 2020</p>
              <div className='mt-4'>
                <Button variant='danger' onClick={() => alert('Account deleted')} className='me-2'>
                  Delete Account
                </Button>
                <Button variant='secondary' onClick={() => alert('Account deactivated')}>
                  Deactivate Account
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
      <h2 className='heading'>Referral Settings</h2>
        <Container style={{boxShadow:'none', height:'200px', padding:'20px', paddingTop:'30px'}}>
          <Row>
            <Col md={3} className='text-center'>
              <h4>Reward Amount</h4>
              <CountUp end={settings.rewardAmount} />
            </Col>
            <Col md={3} className='text-center'>
              <h4>Referral Code Expiration</h4>
              <CountUp end={settings.referralCodeExpiration} duration={1000} />
            </Col>
            <Col md={3} className='text-center'>
              <h4>Minimum Referrals for Bonus</h4>
              <CountUp end={settings.minReferralsForBonus} duration={1000} />
            </Col>
            <Col md={3} className='text-center'>
              <h4>Bonus Amount</h4>
              <CountUp end={settings.bonusAmount} />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <h2 className='heading'>Logs and Analytics</h2>
        <p style={{ color: 'black', textAlign: 'center' }}>
          This helps you show how far you have come, how much you have made and how many people are under you.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <Pie data={chartDataPie} className='pie'/>
          </div>
          <div style={{ flex: 1 }}>
            <Line data={chartData} style={{ width: '100%', height: '300px' }} />
          </div>
        </div>
      </section>

      {/* Uncomment if needed */}
      {/* <section>
        <h2 className='heading'>Documentation and Help</h2>
        <p><a href="/docs/referral-system" target="_blank" rel="noopener noreferrer">Referral System Documentation</a></p>
        <p><a href="/support" target="_blank" rel="noopener noreferrer">Contact Support</a></p>
      </section> */}
    </div>
  );
};

export default Setting;
