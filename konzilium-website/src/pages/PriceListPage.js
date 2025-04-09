// src/pages/PriceListPage.js
import React from 'react';
import '../components/PriceList.css';

function PriceListPage() {
  return (
    <div className="price-page">
      <div className="price-hero">
        <div className="price-hero-content">
          <h1>Cenník</h1>
          <p>Služby čiastočne alebo plne hradené pacientom.</p>
        </div>
      </div>

      <div className="container">
        <h2>Vybraté služby a príspevky pacienta</h2>
        <table className="price-table">
          <thead>
            <tr>
              <th>Služba</th>
              <th>Cena</th>
              <th>Poznámka</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Služby recepcie</td><td>5 €</td><td>Na žiadosť pacienta</td></tr>
            <tr><td>Vyšetrenie v inom zariadení</td><td>8 €</td><td>Externé vyšetrenia</td></tr>
            <tr><td>Potvrdenie o návšteve</td><td>1,50 €</td><td>Pre sprevádzajúcu osobu</td></tr>
            <tr><td>Kópia nálezu</td><td>2,50 €</td><td>-</td></tr>
            <tr><td>Konzultácia dokumentácie</td><td>25 €</td><td>Na základe dokumentácie</td></tr>
            <tr><td>Konzultácia zdravotného stavu</td><td>79 €</td><td>Osobná konzultácia</td></tr>
            <tr><td>Konzultácia pre príbuzného</td><td>25 €</td><td>-</td></tr>
            <tr><td>Konzultácia v domácnosti</td><td>120 €</td><td>Domáca návšteva</td></tr>
            <tr><td>Správa v cudzom jazyku</td><td>25 €</td><td>-</td></tr>
            <tr><td>Pomocné vyšetrovacie metódy</td><td>6 - 9 €</td><td>Nadštandard</td></tr>
            <tr><td>Recept mimo vyšetrenia</td><td>1 €</td><td>-</td></tr>
            <tr><td>Zaslanie receptu poštou</td><td>3 €</td><td>Na žiadosť pacienta</td></tr>
            <tr><td>Kúpeľný návrh</td><td>25 €</td><td>-</td></tr>
            <tr><td>EEG biofeedback (10x)</td><td>30 €</td><td>-</td></tr>
            <tr><td>Vyšetrenie pre nemed. účely</td><td>79 €</td><td>-</td></tr>
            <tr><td>Vyplnenie tlačiva</td><td>10 - 25 €</td><td>Podľa zložitosti</td></tr>
            <tr><td>Botulotoxín kozmeticky</td><td>120 €</td><td>Mimo indikácie</td></tr>
            <tr><td>Patologické potenie</td><td>150 €</td><td>-</td></tr>
            <tr><td>Liečivo do infúzie</td><td>6,50 - 25 €</td><td>Nehradené</td></tr>
            <tr><td>Liečivo do obstreku</td><td>7 - 10 €</td><td>-</td></tr>
            <tr><td>Liečivo do injekcie</td><td>3 €</td><td>-</td></tr>
            <tr><td>Epidurálna anestézia</td><td>35 €</td><td>Vrátane liečiva</td></tr>
            <tr><td>Manipulácia kostrče</td><td>25 €</td><td>per rectum</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PriceListPage;