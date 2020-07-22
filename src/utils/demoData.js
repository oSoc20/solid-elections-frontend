let data =
{
  income: {
    title: 'Herkomst van de financiering',
    items: [
      {
        number: '1',
        message: "Geldmiddelen die afkomstig zijn van het eigen patrimonium van de lijst", price: 554,
        sub: [
          { number: 'a', message: "Giften van 125 euro of meer per schenker", price: 554 },
          { number: 'b', message: "Giften van minder dan 125 euro per schenker", price: 554 }
        ]
      },
      { number: '2', message: "Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen", price: 1304 },
      {
        number: '3',
        message: "sponsoring in geld en/of de tegenwaarde van sponsoring in natura", price: 554,
        sub: [
          { number: 'a', message: "bedragen van 125 euro of meer per sponsor", price: 254 },
          { number: 'b', message: "bedragen van minder dan 125 euro per sponsor", price: 654 }
        ]
      },
      { number: '4', message: "financiering door (een component van) de politieke partij", price: 1304 },
      { number: '5', message: "giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen", price: 1304 },

    ],
    total: 56515
  },
  expense: {
    title: 'Aangifte van de verkiezingsuitgaven',
    items: [
      { number: '1', message: "auditieve en mondelinge boodschappen", price: 554, },
      {
        number: '2', message: "geschreven boodschappen", price: 1304,
        sub: [
          {
            number: 'a', message: "kostprijs van advertenties in de pers", price: 254,
            sub: [
              { number: '1', message: "ontwerp- en productiekosten", price: 254 },
              { number: '2', message: "prijs voor de advertentieruimte", price: 254 }
            ]
          },
          { number: 'b', message: "ontwerp- en productiekosten van verkiezingsfolders", price: 254, },
          { number: 'c', message: "kostprijs van brieven en enveloppen", price: 254, },
          { number: 'd', message: "kostprijs van ander drukwerk", price: 254, }
        ]
      },
      {
        number: '3',
        message: "verzendings- en distributiekosten voor verkiezingspropaganda", price: 554,
        sub: [
          {
            number: 'a', message: "portkosten tegen het verminderd tarief voor verkiezingsdrukwerk", price: 254,
            sub: [
              { number: '1', message: "geadresseerde zendingen", price: 254, },
              { number: '2', message: "niet-geadresseerde zendingen", price: 254, }
            ]
          },
          { number: 'b', message: "portkosten voor andere zendingen", price: 654 },
          { number: 'c', message: "andere distributiekosten", price: 654 }
        ]
      },
      {
        number: '4', message: "visuele boodschappen", price: 1304,
        sub: [
          { number: 'a', message: "productie- en huurkosten voor niet-commerciële borden van 4 m² of minder", price: 254, },
          { number: 'b', message: "druk- en productiekosten voor affiches van 4 m² of minder", price: 654 },
          { number: 'c', message: "reclamespots op het internet of internetcampagnes", price: 654 },
          { number: 'd', message: "andere kosten voor visuele boodschappen", price: 654 }
        ]
      },
      {
        number: '5', message: "andere kosten", price: 1304, sub: [
          { number: 'a', message: "verkiezingsmanifestaties", price: 254, },
          { number: 'b', message: "productiekosten voor website of webpagina, ontworpen met verkiezingsdoeleinden", price: 654 },
          { number: 'c', message: "varia", price: 654 },
        ]
      },

    ],
    total: 25415
  }
}



export default data