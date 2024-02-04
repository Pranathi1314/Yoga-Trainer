// HomePage.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

import image1 from './tadasana.png';
import image2 from './vajrasana.jpeg';
import image3 from './trikonasana.png';
import image4 from './vrikshasana.png';
import image5 from './virabhadrasana1.png';

import './HomePage.css'; // Import your CSS file

const HomePage = () => {

  const [selectedOption, setSelectedOption] = useState('');
  
  const imageMap = {
    option1: image1,
    option2: image2,
    option3: image3,
    option4: image4,
    option5: image5,
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="home-container" style={{backgroundColor: 'rgb(205, 234, 247)'}}>
      <h2>🧘Welcome to your AI Yoga Trainer🧘</h2>
      <div className="container mt-4">
        <Row>
          <Col md={6} className="mb-4 d-flex">
            <Card className="flex-fill">
              <Card.Body>
                <Card.Title>OpenCV cam</Card.Title>
                <Card.Text>
                 camera 📷 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4 d-flex">
            <Card className="flex-fill">
              <Card.Body>
                <Card.Title>Pose</Card.Title>
                <Card.Text>
                <div>
                  <h3>Select a pose :</h3>
                  <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    <option value="option1">Tadasana</option>
                    <option value="option2">Vajrasana</option>
                    <option value="option3">Trikonasana</option>
                    <option value="option4">Vrikshasana</option>
                    <option value="option5">Virabhadrasana I </option>
                  </select>

                  {selectedOption && (
                    <div>
                      <p>You selected: {selectedOption}</p>
                      <img
                        src={imageMap[selectedOption]}
                        alt={`${selectedOption}`}
                        style={{ maxWidth: '100%', maxHeight: '200px' }}
                      />
                    </div>
                  )}
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;

