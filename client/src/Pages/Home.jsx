import React, { useState } from 'react';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import AboutSection from '../Components/Common/About';
import ServiceSection from '../Components/Common/ServiceSection';
import Contact from '../Components/Signup/Contact';
import ClientSection from '../Components/Common/ClientSection';
import QopraProduct from '../Components/Common/QopraProduct';

function Home() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [activeService, setActiveService] = useState('');

  return (
    <div className="home-container">
      <Navbar 
        onServiceClick={(id) => {
          setActiveService(id);
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} 
        onContactClick={() => setShowContactPopup(true)} 
      />

      <div className="home-page">
        <div className="center-content">
          <h1>Social Strategy Infotech</h1>
          <p>Grow your brand & win hearts - with data-driven social strategy</p>
        </div>
      </div>

      <div className="content-sections">
        <AboutSection />
        {/* <ServiceSection activeService={activeService} /> */}
        <QopraProduct />
        <ClientSection />
      </div>

      <Footer onContactClick={() => setShowContactPopup(true)} />

      <Contact show={showContactPopup} onClose={() => setShowContactPopup(false)} />
    </div>
  );
}

export default Home;
