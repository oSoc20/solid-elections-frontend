/* eslint-disable react/prop-types */
import React from 'react'
import textData from '../utils/textData'

export default function TabelIncome(props) {

  let getItemById = (id, type) => {

    let item = props.data[type].find((item) => {
      return item.identifier === id
    })
    if (item) {
      return item
    } else {
      return { price: 0 }

    }
  }

  return (
    <table className="vl-data-table table">
      <thead>
        <tr>
          <th colSpan="2">
            <h3 className="vl-title vl-title--h3 vl-title--sans">{props.type === "donations" ? textData.donations.title : textData.expenses.title} </h3>
          </th>
          <th>EUR</th>
        </tr>
      </thead>
      <tbody>

        {/* donations */}
        <tr className="bold ws__top--md">
          <td>1.</td>
          <td>Geldmiddelen die afkomstig zijn van het eigen patrimonium van de lijst</td>
          <td>{getItemById("1.1", 'donations').price}</td>
        </tr>

        <tr className="bold ws__top--md" >
          <td>2.</td>
          <td>Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen</td>
          <td>{getItemById("2.1.1", 'donations').price
            + getItemById("2.1.2", 'donations').price}</td>
        </tr>

        <tr>
          <td>a.</td>
          <td>Giften van 125 euro of meer per schenker</td>
          <td>{getItemById("2.1.1", 'donations').price}</td>
        </tr>

        <tr>
          <td>b.</td>
          <td>Giften van minder dan 125 euro per schenker</td>
          <td>{getItemById("2.1.2", 'donations').price}</td>
        </tr>

        <tr className="bold ws__top--md" >
          <td>3. </td>
          <td>Sponsoring in geld en/of de tegenwaarde van sponsoring in natura</td>
          <td>{getItemById("3.1.1", 'donations').price
            + getItemById("3.1.2", 'donations').price}</td>
        </tr>

        <tr>
          <td>a.</td>
          <td>Bedragen van 125 euro of meer per sponsor</td>
          <td>{getItemById("3.1.1", 'donations').price}</td>
        </tr>

        <tr >
          <td>b.</td>
          <td>Bedragen van minder dan 125 euro per sponsor</td>
          <td>{getItemById("3.1.2", 'donations').price}</td>
        </tr>

        {/* 4 start */}
        <tr className="bold ws__top--md" >
          <td>4.</td>
          <td>Financiering door (een component van) de politieke partij</td>
          <td>{getItemById("4.1", 'donations').price}</td>
        </tr>

        {/* 5 start */}
        <tr className="bold ws__top--md" >
          <td>5.</td>
          <td>Giften in geld en/of de tegenwaarde van giften in natura van natuurlijke personen</td>
          <td>{getItemById("5.1", 'donations').price}</td>
        </tr>

        {/* end ----------------------------------//donations */}
        {/* {tableRows} */}
        <tr className="bold total" >
          <td colSpan="2">TOTAAL BEDRAG </td>
          <td>{props.type === "donations" ? props.data.totalDonations : props.data.totalExpenses}</td>
        </tr>
      </tbody>
    </table>
  )
}
