// src/pages/AboutPage.js
import React from 'react';
import '../components/AboutPage.css'; // Adjust path if needed

// Array of team members
const teamMembers = [
  { name: 'MUDr. Ľubomír Ježík', role: 'neurológ' },
  { name: 'MUDr. Marcela Blašková', role: '' },
  { name: 'MUDr. Zora Koyšová', role: '' },
  { name: 'MUDr. Eva Magnerová', role: 'fyziater, balneológ' },
  { name: 'Ing. Andrea Bajová', role: 'CEO, koordinátor štúdií' },
  { name: 'RNDr. Peter Perichta, CSc.', role: 'COO' },
  { name: 'Viera Keleová', role: '' },
  { name: 'Silvia Gáborová', role: 'zdravotná sestra' },
  { name: 'Mgr. Beáta Staňáková', role: '' },
  { name: 'Mgr. Katarína Baginová', role: '' },
  { name: 'Mgr. Veronika Hudcovská', role: '' },
  { name: 'Mgr. Mária Mahďarová', role: '' },
  { name: 'Bc. Miroslava Gajdúšková', role: 'fyzioterapeut' },
  // add or remove as needed
];

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero/Intro Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Náš tím</h1>
          <p>
            Neurologické a rehabilitačné centrum.
            <br /> Vďaka tímu profesionálov 
            a kvalitnému vybaveniu poskytujeme špičkové služby v oblasti 
            neurológie, rehabilitácie a wellness.
            <br />
            Našim cieľom je Vaše zdravie a spokojnosť.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="container about-main">
        {/* New Introductory Text Block Above Lead Doctor Section */}
        <div className="about-summary">
        <h2>Konzílium</h2>
          <p>
            Medicínske centrum Konzílium ponúka pacientom komplexnú starostlivosť <br />
            v dynamickom prostredí, bez čakania, <br />
            na objednávky podľa potrieb a žiadostí pacienta. Dlhoročné skúsenosti, milý vyškolený personál <br />
            a príjemné prostredie spôsobili, že naše centrum vyhľadávajú nielen pacienti z blízkeho prostredia, ale aj z celého Slovenska, ba aj zahraničia. <br />
            Spolupracujeme aj s ďalšími pracoviskami <br />
            a pacientom v prípade potreby zabezpečujeme <br />
            aj operačné zákroky a liečbu v zahraničí.
          </p>
        </div>

        {/* Lead Doctor Section */}
        <div className="lead-doctor">
          <img 
            src={`${process.env.PUBLIC_URL}/images/baby.jpg`} 
            alt="MUDr. Magdaléna Perichtová"
            className="lead-doctor-img"
          />
          <div className="lead-doctor-text">
            <h2>MUDr. Magdaléna Perichtová</h2>
            <h4>neurológ, detský neurológ</h4>
            <p>
              Založila medicínske centrum v roku 2005. Po absolvovaní 
              Univerzity Komenského v Bratislave pracovala na Neurologickom 
              oddelení v Dubnici nad Váhom u Prim. MUDr. Karola Krajču. 
              Po získaní atestácií z neurológie a detskej neurológie sa ďalej 
              vzdelávala na renomovaných neurologických pracoviskách 
              v Bratislave, ako aj u Prim. MUDr. Dolanského, Doc. MUDr. Hovorku, 
              Prim. MUDr. Ing. Petránka a MUDr. Hermana v Prahe atď.
            </p>
            <p>
              10 rokov predsedala Združeniu ambulantných neurológov, bola 
              vedeckým sekretárom Slovenskej neurologickej spoločnosti a 
              predsedom neurologickej sekcie Slovenskej lekárskej komory
              a členkou Kontrolného výboru SLK.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <h3>Ďalší členovia tímu</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              {/* Optionally, add a member image here */}
              <h4>{member.name}</h4>
              {member.role && <p>{member.role}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
