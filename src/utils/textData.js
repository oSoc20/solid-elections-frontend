let textData =
{
  candidate: {
    date: '01/01/2018',
    name: 'Sander Loones',
    party: 'N-VA',
    location: 'Koksijde-Oostduinkerken'
  },
  donations: {
    title: 'Herkomst van de financiering',
    shortTitle: 'Herkomst',
    color: '#FFC515',
    items: [
      { id: "1.1", number: '1', short: 'Eigen Patrimonium Van Lijst', message: "Geldmiddelen die afkomstig zijn van het eigen patrimonium van de lijst", color: '#FF4141', type: 'main' },
      { id: "2.1", number: '2', short: 'Giften Geld/Natura', message: "Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen", color: '#FF4141', type: 'main' },
      { id: "2.1.1", number: 'a', short: 'Giften > 125 EUR', message: "Giften van 125 euro of meer per schenker", color: '#0F6FD7', type: 'sub' },
      { id: "2.1.2", number: 'b', short: 'Giften < 125 EUR', message: "Giften van minder dan 125 euro per schenker", color: '#0F6FD7', type: 'sub' },
      { id: "3.1", number: '3', short: 'Sponsoring In Geld', message: "Sponsoring in geld en/of de tegenwaarde van sponsoring in natura", color: '#FF4141', type: 'main' },
      { id: "3.1.1", number: 'a', short: 'Sponsor > 125 EUR', message: "Bedragen van 125 euro of meer per sponsor", color: '#0F6FD7', type: 'sub' },
      { id: "3.1.2", number: 'b', short: 'Sponsor < 125 EUR', message: "Bedragen van minder dan 125 euro per sponsor", color: '#0F6FD7', type: 'sub' },
      { id: "4.1", number: '4', short: 'Financiering door een politieke partij', message: "Financiering door (een component van) de politieke partij", color: '#FF4141', type: 'main' },
      { id: "5.1", number: '5', short: 'Giften Geld/Natura', message: "Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen", color: '#FF4141', type: 'main' },
    ],
    total: 56515
  },
  expenses: {
    title: 'Aangifte van de verkiezingsuitgaven',
    shortTitle: 'Uitgaven',
    color: '#FFC515',
    items: [
      { id: "1.1", number: '1', short: 'Auditieve en mondelinge boodschappen', message: "Auditieve en mondelinge boodschappen", color: '#FF4141', type: 'main' },
      { id: "2.1", number: '2', short: 'Geschreven boodschappen', message: "Geschreven boodschappen", color: '#FF4141', type: 'main' },
      { id: "2.1.1", number: 'a', short: 'Advertenties', message: "Kostprijs van advertenties in de pers", color: '#0F6FD7', type: 'sub' },
      { id: "2.1", number: 'a.1', short: 'Ontwerp- en productiekosten', message: "Ontwerp- en productiekosten", color: '#B3E000', type: 'sub-sub' },
      { id: "1.1", number: 'a.2', short: 'Advertentieruimte', message: "Prijs voor de advertentieruimte", color: '#B3E000', type: 'sub-sub' },
      { id: "1.1", number: 'b', short: 'Verkiezingsfolders', message: "Ontwerp- en productiekosten van verkiezingsfolders", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'c', short: 'brieven en enveloppen', message: "Kostprijs van brieven en enveloppen", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'd', short: 'ander drukwerk', message: "Kostprijs van ander drukwerk", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: '3', short: 'Verzendings- en distributiekosten', message: "Verzendings- en distributiekosten voor verkiezingspropaganda", color: '#FF4141', type: 'main' },
      { id: "1.1", number: 'a', short: 'Portkosten tegen het verminderd tarief', message: "Portkosten tegen het verminderd tarief voor verkiezingsdrukwerk", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'a.1', short: "Geadresseerde zendingen", message: "Geadresseerde zendingen", color: '#B3E000', type: 'sub-sub' },
      { id: "1.1", number: 'a.2', short: "Niet-geadresseerde zendingen", message: "Niet-geadresseerde zendingen", color: '#B3E000', type: 'sub-sub' },
      { id: "1.1", number: 'b', short: "Andere zendingen", message: "Portkosten voor andere zendingen", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'c', short: 'Andere distributiekosten', message: "Andere distributiekosten", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: '4', short: 'Visuele boodschappen', message: "Visuele boodschappen", color: '#FF4141', type: 'main' },
      { id: "1.1", number: 'a', short: 'Niet-commerciele', message: "Productie- en huurkosten voor niet-commerciële borden van 4 m² of minder", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'b', short: 'Affiches', message: "Druk- en productiekosten voor affiches van 4 m² of minder", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'c', short: 'Reclamespots op het internet ', message: "Reclamespots op het internet of internetcampagnes", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'd', short: 'Andere visuele boodschappen', message: "Andere kosten voor visuele boodschappen", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: '5', short: 'Andere', message: "Andere kosten", color: '#FF4141', type: 'main' },
      { id: "1.1", number: 'a', short: 'Verkiezingsmanifestaties', message: "Verkiezingsmanifestaties", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'b', short: 'Website of webpagina', message: "Productiekosten voor website of webpagina, ontworpen met verkiezingsdoeleinden", color: '#0F6FD7', type: 'sub' },
      { id: "1.1", number: 'c', short: 'Varia', message: "Varia", color: '#0F6FD7', type: 'sub' }

    ],
    total: 25415
  }
}



export default textData