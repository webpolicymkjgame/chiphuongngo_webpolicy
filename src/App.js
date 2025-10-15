import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';


import phonecase from './assets/app/phonecase.png';
import merge from './assets/app/merge.png';


import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="CHI PHUONG NGO STUDIO" className="logo-img" />
                <span className="studio-name">CHI PHUONG NGO STUDIO</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {
  const apps = [
    {
      name: '3D Phone Case DIY: Makeover',
      image: phonecase,
      link: 'https://apps.apple.com/us/app/3d-phone-case-diy-makeover/id6753043041'
    },
    {
      name: 'Master Merge - Funny Drop',
      image: merge,
      link: 'https://apps.apple.com/us/app/master-merge-funny-drop/id6747335045'
    }
  ];

  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">CHI PHUONG NGO STUDIO – Welcome Aboard</h2>
            <p className="about-text">CHI PHUONG NGO STUDIO is a creative mobile game studio focused on crafting fun, engaging, and accessible casual experiences for everyone. We combine imagination with simplicity to deliver games that are easy to pick up yet hard to put down. Our mission is to bring joy to everyday moments through intuitive gameplay, charming visuals, and rewarding progression. Every title we develop is designed with players in mind — ensuring smooth performance, delightful interactions, and a sense of satisfaction that keeps people coming back for more.</p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Productivity Tools</h2>
          <div className="game-grid">
            {apps.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on App Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto: chimoe379@gmail.com"> chimoe379@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>

            </span>
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} CHI PHUONG NGO STUDIO. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
