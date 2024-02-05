// HomePage.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import { auth } from "../firebase-config";
import UserCredentials from './UserCredentials';
import image1 from './tadasana.png';
import image2 from './vajrasana.jpeg';
import image3 from './trikonasana.png';
import image4 from './vrikshasana.png';
import image5 from './virabhadrasana1.png';
import image0 from './relaxed.png';
import { signOut } from 'firebase/auth';

import './HomePage.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  const imageMap = {
    Tadasana : image1,
    Vajrasana : image2,
    Trikonasana : image3,
    Vrikshasana : image4,
    Virabhadrasana : image5,
  };

  const descriptionMap = {
    Tadasana : "In Tadasana, start by standing tall with feet together and arms by your sides. Ground through your feet, engage your thighs, and lift your chest. As you inhale, raise your arms overhead, bringing palms together to form a mountain over your head. Keep your gaze forward, shoulders relaxed, and maintain a straight line from your feet to your fingertips. Breathe deeply, embracing the mountain-like strength and presence in this pose.",
    Vajrasana : "In Vajrasana, begin by kneeling on the floor with your shins and feet together. Sit back on your heels, keeping your spine straight. Place your hands on your thighs, palms down. Relax your shoulders and breathe deeply. Feel the grounding connection with the earth through your legs. This pose encourages stillness and stability while promoting focus and inner calm. Embrace the simplicity and poise of Vajrasana, allowing it to center your mind and body.",
    Trikonasana : "In Trikonasana, stand with feet wide apart. Extend arms parallel to the floor. Reach sideways, hinging at your hip, and lower one hand to touch the shin, ankle, or floor. The other arm stretches upward, creating a triangle shape. Keep the chest open, gaze at the raised hand, and feel the stretch along the sides. Repeat on the other side.",
    Vrikshasana : "In Vrikshasana, shift weight to one foot and place the sole of the other foot on the inner thigh or calf. Bring palms together at the heart or extend arms overhead. Find a focal point, engage your core, and balance. Root down through the standing leg, imagining yourself as a sturdy tree. Switch legs and repeat.",
    Virabhadrasana : "In Virabhadrasana I, step one foot back, keeping the front knee bent. Square your hips and shoulders forward. Raise your arms overhead, palms facing each other. Sink into the front knee, lengthen the spine, and gaze forward. Feel strength in the legs and openness in the chest. Repeat on the other side.",
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="home-container" style={{backgroundColor: 'rgb(205, 234, 247)'}}>
      <span style={{fontSize: '30px', fontStyle:'bold'}}><strong>🧘Transform Your Health with AI : Yoga at Your Fingertips🧘</strong></span>
      <span style={{float: 'right'}}>
        <UserCredentials email={userEmail} />
      </span>
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
                    <option value="Tadasana">Tadasana</option>
                    <option value="Vajrasana">Vajrasana</option>
                    <option value="Trikonasana">Trikonasana</option>
                    <option value="Vrikshasana">Vrikshasana</option>
                    <option value="Virabhadrasana">Virabhadrasana I </option>
                  </select>
                  {!selectedOption && (
                    <div>
                      <img src={image0} alt="Padmasana"/>
                    </div>
                  )}
                  {selectedOption && (
                    <div>
                      <p>You selected: {selectedOption}</p>
                      <img
                        src={imageMap[selectedOption]}
                        alt={`${selectedOption}`}
                        style={{ maxWidth: '100%', maxHeight: '200px' }}
                      />
                      <br></br>
                      <button className="audio-button" style={{marginTop:'15px'}}>
                      🔊 Play Audio 
                        {/* add an onClick function that speaks the description */}
                      </button>
                      <p style={{marginTop:'10px'}}><strong>Description : </strong></p>
                      <p style={{marginTop:'-10px'}}>{descriptionMap[selectedOption]}</p>
                    </div>
                  )}
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <button className="logout-button" onClick={logout}> Log Out </button>
    </div>
  );
}

export default HomePage;

