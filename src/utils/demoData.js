let data =
{
  candidate: {
    date: '01/01/2018',
    name: 'Sander Loones',
    party: 'N-VA',
    location: 'Koksijde-Oostduinkerken'
  },
  donations: {
    title: 'Herkomst van de financiering',
    items: [
      { number: '1', message: "Geldmiddelen die afkomstig zijn van het eigen patrimonium van de lijst", price: 554, type: 'main' },
      { number: 'a', message: "Giften van 125 euro of meer per schenker", price: 554, type: 'sub' },
      { number: 'b', message: "Giften van minder dan 125 euro per schenker", price: 554, type: 'sub' },
      { number: '2', message: "Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen", price: 1304, type: 'main' },
      { number: '3', message: "Sponsoring in geld en/of de tegenwaarde van sponsoring in natura", price: 554, type: 'main' },
      { number: 'a', message: "Bedragen van 125 euro of meer per sponsor", price: 254, type: 'sub' },
      { number: 'b', message: "Bedragen van minder dan 125 euro per sponsor", price: 654, type: 'sub' },
      { number: '4', message: "Financiering door (een component van) de politieke partij", price: 1304, type: 'main' },
      { number: '5', message: "Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen", price: 1304, type: 'main' },

    ],
    total: 56515
  },
  expenses: {
    title: 'Aangifte van de verkiezingsuitgaven',
    items: [
      { number: '1', message: "Auditieve en mondelinge boodschappen", price: 554, type: 'main' },
      { number: '2', message: "Geschreven boodschappen", price: 1304, type: 'main' },
      { number: 'a', message: "Kostprijs van advertenties in de pers", price: 254, type: 'sub' },
      { number: 'a.1', message: "Ontwerp- en productiekosten", price: 254, type: 'sub-sub' },
      { number: 'a.2', message: "Prijs voor de advertentieruimte", price: 254, type: 'sub-sub' },
      { number: 'b', message: "Ontwerp- en productiekosten van verkiezingsfolders", price: 254, type: 'sub' },
      { number: 'c', message: "Kostprijs van brieven en enveloppen", price: 254, type: 'sub' },
      { number: 'd', message: "Kostprijs van ander drukwerk", price: 254, type: 'sub' },
      { number: '3', message: "Verzendings- en distributiekosten voor verkiezingspropaganda", price: 554, type: 'main' },
      { number: 'a', message: "Portkosten tegen het verminderd tarief voor verkiezingsdrukwerk", price: 254, type: 'sub' },
      { number: 'a.1', message: "Geadresseerde zendingen", price: 254, type: 'sub-sub' },
      { number: 'a.2', message: "Niet-geadresseerde zendingen", price: 254, type: 'sub-sub' },
      { number: 'b', message: "Portkosten voor andere zendingen", price: 654, type: 'sub' },
      { number: 'c', message: "Andere distributiekosten", price: 654, type: 'sub' },
      { number: '4', message: "Visuele boodschappen", price: 1304, type: 'main' },
      { number: 'a', message: "Productie- en huurkosten voor niet-commerciële borden van 4 m² of minder", price: 254, type: 'sub' },
      { number: 'b', message: "Druk- en productiekosten voor affiches van 4 m² of minder", price: 654, type: 'sub' },
      { number: 'c', message: "Reclamespots op het internet of internetcampagnes", price: 654, type: 'sub' },
      { number: 'd', message: "Andere kosten voor visuele boodschappen", price: 654, type: 'sub' },
      { number: '5', message: "Andere kosten", price: 1304, type: 'main' },
      { number: 'a', message: "Verkiezingsmanifestaties", price: 254, type: 'sub' },
      { number: 'b', message: "Productiekosten voor website of webpagina, ontworpen met verkiezingsdoeleinden", price: 654, type: 'sub' },
      { number: 'c', message: "Varia", price: 654, type: 'sub' }

    ],
    total: 25415
  }
}



export default data