// src/pages/HomePage.js
import React from 'react';
import '../components/HomePage.css';

function HomePage() {
  return (
    <div>
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <div className="hero">
        <div className="hero-content">
          <h1>Vitajte v Konzíliu</h1>
          <p>Neurologické a Rehabilitačné Centrum</p>
          <a href="/#/contact" className="hero-btn">Kontaktujte Nás</a>
        </div>
      </div>

      

      {/* THREE CARDS SECTION */}
      <div className="container services">
        <h2>Naše Služby</h2>
        <div className="cards">
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/neurology.jpg`} alt="Neurológia" />
            <h3>Neurológia</h3>
            <p>pacientom s neurologickými ochoreniami a problémami ponúkame citlivý a individuálny prístup založený na najnovších medicínskych poznatkoch</p>
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/rehab.jpg`} alt="Rehabilitácia" />
            <h3>Rehabilitácia</h3>
            <p>vyškolené fyzioterapeutky zabezpečujú liečbu neurologických ochorení, chorôb chrbtice, ale aj poúrazových stavov a špecializovanú rehabilitáciu novorodencov a dojčiat</p>
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/welness.jpg`} alt="Wellness" />
            <h3>Wellness</h3>
            <p>ak si pacient po liečbe chce udržať svoje zdravie, v príjemnom prostredí našho medicínskeho centra ponúkame aj komplexný relax</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
