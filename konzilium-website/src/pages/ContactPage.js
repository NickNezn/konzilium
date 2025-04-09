// src/pages/ContactPage.js
import React from 'react';
import '../components/ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Three Cards Section: Hours, Addresses, Phone/Email */}
      <div className="container contact-cards">
        {/* Card 1: Ordinačné Hodiny */}
        <div className="card">
          <h3>Ordinačné Hodiny</h3>
          <ul>
            <li><strong>Pondelok:</strong> 7:00 – 15:30</li>
            <li><strong>Utorok:</strong> 7:00 – 15:30</li>
            <li><strong>Streda:</strong> 7:00 – 15:30</li>
            <li><strong>Štvrtok:</strong> 7:00 – 15:30</li>
            <li><strong>Piatok:</strong> 7:00 – 15:30</li>
          </ul>
          <p>
            Objednávky osobne alebo telefonicky podľa poisťovní.
            V rámci nadštandardných služieb aj mimo ordinačných hodín
            alebo pri lôžku pacienta.
          </p>
        </div>

        {/* Card 2: Adresy */}
        <div className="card">
          <h3>Adresa 1</h3>
          <p>
            <strong>Dubnica nad Váhom</strong><br />
            Ulica A. Kmeťa 370<br />
            (neurológia, rehabilitácia, wellness)
          </p>
          <h3>Adresa 2</h3>
          <p>
            <strong>Nová Dubnica</strong><br />
            Gagarinova 5<br />
            Mestské zdravotné stredisko (rehabilitácia)
          </p>
        </div>

        {/* Card 3: Telefónne číslo + Email */}
<div className="card">
  <h3>Telefónne číslo</h3>
  <p>
    <strong>Dubnica nad Váhom</strong><br />
    <a href="tel:0424426231">042/44 26 231</a><br />
    <a href="tel:0944447735">0944 44 77 35</a>
  </p>
  <p>
    <strong>Nová Dubnica</strong><br />
    <a href="tel:0424434673">042/44 34 673</a>
  </p>
  <h4>Email</h4>
  <p>
    <a href="mailto:konzilium.med@gmail.com">
      konzilium.med@gmail.com
    </a>
  </p>
</div>

      </div>

      {/* TWO MAPS SECTION */}
      <div className="container maps-section">
        <div className="map-card">
          <h3>Dubnica nad Váhom</h3>
          <iframe
            title="Mapa - Dubnica nad Váhom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.711271630917!2d18.16645871238669!3d48.95898339350217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471499bb788bb0a5%3A0x3b77374fd8d0065c!2sAndreja%20Kme%C5%A5a%20370%2F15%2C%20018%2041%20Dubnica%20nad%20V%C3%A1hom%2C%20Slovensko!5e0!3m2!1ssk!2scz!4v1744207002448!5m2!1ssk!2scz"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="map-card">
          <h3>Nová Dubnica</h3>
          <iframe
            title="Mapa - Nová Dubnica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.0387579952694!2d18.14239591238564!3d48.93370359528354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714985b0a3defdf%3A0xf926aac5e42f766a!2sMESTSK%C3%89%20ZDRAVOTN%C3%89%20STREDISKO!5e0!3m2!1ssk!2scz!4v1744206140973!5m2!1ssk!2scz"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
