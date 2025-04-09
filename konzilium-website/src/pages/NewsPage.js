// src/pages/NewsPage.js
import React from 'react';
import '../components/NewsPage.css'; // Adjust path if needed

function NewsPage() {
  return (
    <div className="news-page">
      {/* HERO SECTION */}
      <div className="news-hero">
        <div className="hero-content">
          <h1>Novinky</h1>
          <p>Aktuálne informácie, novinky a klinické štúdie v našom centre.</p>
        </div>
      </div>

      {/* MAIN NEWS CONTAINER */}
      <div className="container news-container">
        {/* Card 1: Novinka (Sclerosis multiplex) */}
        <div className="news-card highlight">
          <h2>Novinka</h2>
          <p>
            V našom centre v súčasnosti prebieha klinická štúdia liečby pacientov 
            so <strong>Sclerosis multiplex</strong>.<br /><br />
            Pacienti majú jedinečnú možnosť hneď sa liečiť najmodernejšou formou 
            liečby v tabletkovej forme namiesto použitia invazívnej liečby 
            injekciami alebo infúziami.<br /><br />
            Bližšie informácie na tel. č: <a href="tel:0424426231">042 4426 231 </a> 
            alebo emailom <a href="mailto:konzilium.med@gmail.com">konzilium.med@gmail.com</a>.
          </p>
        </div>

        {/* Card 2: Biofeedback */}
        <div className="news-card">
          <h2>Biofeedback</h2>
          <p>
            Ak má vaše dieťa diagnostikovanú ADHD alebo problém s koncentráciou 
            alebo učením, ponúkame Vám najnovšiu techniku <strong>EEG-BIOFEEDBACK</strong>.
            Táto metóda je bez rizika poškodenia a môže významne zlepšiť schopnosť 
            sústredenia a učenia, vďaka čomu je užitočným doplnkom liečby 
            rôznych porúch pozornosti.
          </p>
        </div>

        {/* Card 3: Botulotoxín */}
        <div className="news-card">
          <h2>Botulotoxín</h2>
          <p>
            Botulotoxínom liečime ťažké reumatologické a neurologické diagnózy 
            ako spasticitu pri DMO, po CMP, cervikálne dystónie, blefarospazmus 
            a ďalšie. Aplikácia BTX ponúka rýchle zlepšenie stavu a pomáha pri 
            zmierňovaní svalového napätia alebo mimických kŕčov.
          </p>
        </div>

        {/* Card 4: Klinické štúdie */}
        <div className="news-card">
          <h2>Klinické štúdie</h2>
          <p>
            Naše špičkové vybrané pracoviská spĺňajú prísne kritériá pre 
            realizáciu klinických štúdií v rámci EÚ i celosvetovo. V spolupráci 
            s tímom vyšetrovateľov, koordinátorov a odborníkov participujeme 
            v celom procese výberu pacientov a starostlivosti počas štúdie.  
            <br /><br />
            Momentálne sa u nás realizujú štúdie na liečbu <strong>Sclerosis multiplex</strong>, 
            <strong>Parkinsonovej choroby</strong>, <strong>Alzheimerovej demencie</strong>, 
            <strong>Epilepsie</strong>, <strong>migrény</strong> a ďalších. Naším cieľom je 
            priniesť pacientom tie najmodernejšie postupy a zlepšiť tak ich kvalitu života.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
