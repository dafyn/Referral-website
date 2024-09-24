import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button} from 'react-bootstrap';
import pic from '../../Assets/Digital-Marketing-unscreen.gif';
import money from '../../Assets/money.png'
import './HomeStyle.css';

const Home = () => {
  const newsData = [
    { id: 1, title: "New Course Launched", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "Webinar on Digital Marketing", description: "Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." },
    { id: 3, title: "Industry Partnership", description: "Vivamus suscipit tortor eget felis porttitor volutpat." },
    { id: 4, title: "New Course Launched", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, title: "Webinar on Digital Marketing", description: "Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." },
    { id: 6, title: "Industry Partnership", description: "Vivamus suscipit tortor eget felis porttitor volutpat." },
    { id: 7, title: "New Course Launched", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, title: "Webinar on Digital Marketing", description: "Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." },
    { id: 9, title: "Industry Partnership", description: "Vivamus suscipit tortor eget felis porttitor volutpat." }
  ];

  const opportunitiesData = [
    { id: 1, title: "Internship Opportunity", description: "Pellentesque in ipsum id orci porta dapibus." },
    { id: 2, title: "Job Opening: Digital Marketer", description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a." },
    { id: 3, title: "Scholarship Program", description: "Quisque velit nisi, pretium ut lacinia in, elementum id enim." },
    { id: 4, title: "Internship Opportunity", description: "Pellentesque in ipsum id orci porta dapibus." },
    { id: 5, title: "Job Opening: Digital Marketer", description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a." },
    { id: 6, title: "Scholarship Program", description: "Quisque velit nisi, pretium ut lacinia in, elementum id enim." },
    { id: 7, title: "Internship Opportunity", description: "Pellentesque in ipsum id orci porta dapibus." },
    { id: 8, title: "Job Opening: Digital Marketer", description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a." },
    { id: 9, title: "Scholarship Program", description: "Quisque velit nisi, pretium ut lacinia in, elementum id enim." }
    
  ];
  return (
    <div>
        <div className='main-title'>
            <Container style={{boxShadow: 'none', height: '450px'}}>
              <Row >
                <Col md={6} >
                <div >
                  <h4 style={{ fontSize: 50 , marginTop: '60px'}}>
                    Digital <span style={{ color: 'gold' }}>★</span> <br /> marketing Classes 
                  </h4>
                  <p style={{color: 'GrayText', fontSize: '20px', marginTop: '40px'}}>We build effective strategies to help you reach customers and prospects across the entire web.</p>
                </div>
                  <div className="btns-group">
						        <Button className="btn--theme">Continue</Button>
						        <Button className="btn--theme2">
							        Referring
						        </Button>
					        </div>
                </Col >
                <Col md={6} className='picContainer'> 
                  <img src={pic} alt="Startboom Digital Academy pic" className='pic'/>
                </Col>
              </Row>
            </Container>
        </div>

        <section className='about'>
          <h2 className='heading'>About us and how this works</h2>
          <p>
            This system is designed to reward you for sharing out digital marketing classes with others. Whether you are a learner or a digital marketing euthusiast, our 
            system allows you to earn money every time someone signs up through your referral.<br />
            Every time you refer to someone the system and the person uses your link to open an account, you earn Ugx 5000 shilling for each person.
          </p>
        </section>

        <section className='howitworks'>
          <h2 className='heading'>
            How it Works
          </h2>
          <Container  className='content-container' style={{boxShadow: 'none', height: '450px'}}>
            <Row>
              <Col md={6} className='image-col'>
                <img src={money} alt="money" style={{maxWidth: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} />
              </Col>
              <Col md={6} className='list-col'>
              <ul>
                <li><strong>Copy link:</strong> Copy the link on your clipboard , the link is found on the network <Link to={'/network'}>page</Link>.</li>
                <li><strong>Invite:</strong> Share your unique referral link with a friend, or anyone interested in learning digital marketing.</li>
                <li><strong>Minimum:</strong> The minimum number of people you should share your link with is three.</li>
                <li><strong>Encourage:</strong> Encourage the minimum number of people to make payment for the classes.</li>
                <li><strong>Earn Points :</strong> For every payment through your link, you will earn Ugx 5,000.</li>
                <li><strong>Continuity:</strong> And when the minimum number of people that paid bring their references, you will continue to earn Ugx 5,000, until you are on the eigth level.</li>   
              </ul>
              </Col>
            </Row>
          </Container>
        </section>
        
        <Container className='newsOpps' style={{boxShadow: 'none', height: '450px'}}>
          <Row>
            <Col md={6} className='newsContainer'>
              <h5 style={{ textAlign:'center'}}>News </h5>
              <div className='content'>
              {newsData.map(item => (
                  <div key={item.id}>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </Col>
            <Col md={6} className='OppsContainer'>
              <h5 style={{ textAlign: 'center' }}>Opportunities</h5>
              <div className='content'>
                {opportunitiesData.map(item => (
                  <div key={item.id}>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Home ;