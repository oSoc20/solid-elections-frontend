/* eslint-disable react/prop-types */
import React from 'react'
import textData from '../utils/textData'

export default function Tabel(props) {
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

  // if (props.data[props.type]) {
  //   props.data[props.type].map((item, id) => {
  //     {/* {props.generalTexts.items[id].type === 'main' ? <div key={'main' + id} className="white--space__main"></div> : ""} */ }
  //     tableRows.push(
  //       <tr key={id} className={props.generalTexts.items[id].type === 'main' ? "bold ws__top--md" : ""} >
  //         <td>{props.generalTexts.items[id].number}. </td>
  //         <td>{props.generalTexts.items[id].message}</td>
  //         <td>{item.price}</td>
  //       </tr>
  //     )
  //     return true
  //   })
  // }

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

        {/* expenses */}
        <tr className="bold ws__top--md" >
          <td>1. </td>
          <td>Auditieve en mondelinge boodschappen</td>
          <td>{getItemById("1.1", 'expenses').price}</td>
        </tr>

        <tr className="bold ws__top--md" >
          <td>2. </td>
          <td>Geschreven boodschappen</td>
          <td>{
            getItemById("2.1.1", 'expenses').price
            + getItemById("2.1.2", 'expenses').price
            + getItemById("2.2", 'expenses').price
            + getItemById("2.3", 'expenses').price
            + getItemById("2.4", 'expenses').price
            + getItemById("2.5", 'expenses').price
          }</td>
        </tr>

        <tr>
          <td>a. </td>
          <td>Kostprijs van advertenties in de pers</td>
          <td>{getItemById("2.1.1", 'expenses').price + getItemById("2.1.2", 'expenses').price}</td>
        </tr>

        <tr>
          <td>a.1. </td>
          <td>Ontwerp- en productiekosten</td>
          <td>{getItemById("2.1.1", 'expenses').price}</td>
        </tr>

        <tr>
          <td>a.2.</td>
          <td>Prijs voor de advertentieruimte</td>
          <td>{getItemById("2.1.2", 'expenses').price}</td>
        </tr>

        <tr>
          <td>b.</td>
          <td>Ontwerp- en productiekosten van verkiezingsfolders</td>
          <td>{getItemById("2.2", 'expenses').price}</td>
        </tr>

        <tr>
          <td>c. </td>
          <td>Kostprijs van brieven en enveloppen</td>
          <td>{getItemById("2.3", 'expenses').price}</td>
        </tr>

        <tr >
          <td>d. </td>
          <td>Kostprijs van ander drukwerk</td>
          <td>{getItemById("2.4", 'expenses').price}</td>
        </tr>

        <tr >
          <td>e. </td>
          <td>Kosten voor e-mails en niet-commerciële sms-campagnes </td>
          <td>{getItemById("2.5", 'expenses').price}</td>
        </tr>

        <tr className="bold ws__top--md" >
          <td>3. </td>
          <td>Verzendings- en distributiekosten voor verkiezingspropaganda</td>
          <td>{
            getItemById("3.1.1", 'expenses').price
            + getItemById("3.1.2", 'expenses').price
            + getItemById("3.2", 'expenses').price
            + getItemById("3.3", 'expenses').price
          }</td>
        </tr>

        <tr>
          <td>a.</td>
          <td>Portkosten tegen het verminderd tarief voor verkiezingsdrukwerk</td>
          <td>{
            getItemById("3.1.1", 'expenses').price
            + getItemById("3.1.2", 'expenses').price
          }
          </td>
        </tr>

        <tr>
          <td>a.1.</td>
          <td>Geadresseerde zendingen</td>
          <td>{getItemById("3.1.1", 'expenses').price}</td>
        </tr>

        <tr>
          <td>a.2.</td>
          <td>Niet-geadresseerde zendingen</td>
          <td>{getItemById("3.1.2", 'expenses').price}</td>
        </tr>

        <tr>
          <td>b.</td>
          <td>Portkosten voor andere zendingen</td>
          <td>{getItemById("3.2", 'expenses').price}</td>
        </tr>

        <tr >
          <td>c.</td>
          <td>Andere distributiekosten</td>
          <td>{getItemById("3.3", 'expenses').price}</td>
        </tr>

        {/* 4 start */}
        <tr className="bold ws__top--md" >
          <td>4.</td>
          <td>Visuele boodschappen</td>
          <td>{
            getItemById("4.1", 'expenses').price
            + getItemById("4.2", 'expenses').price
            + getItemById("4.3", 'expenses').price
            + getItemById("4.4", 'expenses').price
          }</td>
        </tr>

        <tr>
          <td>a.</td>
          <td>Productie- en huurkosten voor niet-commerciële borden van 4 m² of minder</td>
          <td>{getItemById("4.1", 'expenses').price}</td>
        </tr>

        <tr>
          <td>b.</td>
          <td>Druk- en productiekosten voor affiches van 4 m² of minder</td>
          <td>{getItemById("4.2", 'expenses').price}</td>
        </tr>

        <tr>
          <td>c.</td>
          <td>Reclamespots op het internet of internetcampagnes</td>
          <td>{getItemById("4.3", 'expenses').price}</td>
        </tr>

        <tr>
          <td>d.</td>
          <td>Andere kosten voor visuele boodschappen</td>
          <td>{getItemById("4.4", 'expenses').price}</td>
        </tr>

        {/* 5 start */}
        <tr className="bold ws__top--md" >
          <td>5.</td>
          <td>Andere kosten</td>
          <td>{
            getItemById("5.1", 'expenses').price
            + getItemById("5.2", 'expenses').price
            + getItemById("5.3", 'expenses').price
          }</td>
        </tr>

        <tr>
          <td>a. </td>
          <td>Verkiezingsmanifestaties</td>
          <td>{getItemById("5.1", 'expenses').price}</td>
        </tr>

        <tr>
          <td>b. </td>
          <td>Productiekosten voor website of webpagina, ontworpen met verkiezingsdoeleinden</td>
          <td>{getItemById("5.2", 'expenses').price}</td>
        </tr>

        <tr>
          <td>c. </td>
          <td>Varia</td>
          <td>{getItemById("5.3", 'expenses').price}</td>
        </tr>

        {/* end ----------------------------------//expenses */}
        {/* {tableRows} */}
        <tr className="bold total" >
          <td colSpan="2">TOTAAL BEDRAG </td>
          <td>{props.type === "donations" ? props.data.totalDonations : props.data.totalExpenses}</td>
        </tr>
      </tbody>
    </table>
  )
}
