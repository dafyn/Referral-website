import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import logo from '../Assets/nobackgroundlogo.png';
import { FundOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#f8f9fa', color: '#000' }}>
      <div style={{ padding: '20px 0' }}>
        <Row gutter={[16, 16]} justify="center" >
          {/* Quick Info Section */}
          <Col xs={24} sm={12} md={8}>
            <span>
              <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto' }} />
            </span>  
          </Col>
          
          {/* useful Links Section */}
          <Col xs={24} sm={12} md={8}>
            <h5>Useful links</h5>
            <p>Home</p>
            <p>Withdraw/ Deposit</p>
            <p>Network</p>
            <p>Commission</p>
          </Col>

          {/* Donate Button Section */}
          <Col xs={24} sm={12} md={8}>
            <h5>Join</h5>
            <Button 
              className='custom-button' 
              >
                  <span><FundOutlined /> | Join</span>
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: '#001529', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <span>Startboom Digital Academy ©{new Date().getFullYear()}</span>
        <span style={{ marginLeft: '20px' }}>
          <a href="/privacy-policy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
          <a href="/terms-of-service" style={{ color: '#fff', margin: '0 10px' }}>Terms of Service</a>
          <a href="/cookie-policy" style={{ color: '#fff', margin: '0 10px' }}>Cookie Policy</a>
        </span>
      </div>
    </Footer>
  );
}

export default FooterComponent;