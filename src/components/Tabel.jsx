/* eslint-disable react/prop-types */
import React from 'react'
import data from '../utils/demoData'

export default function Tabel(props) {

  let tableRows = []

  if (props.data[props.type]) {
    props.data[props.type].map((item, id) => {

      {/* {props.generalTexts.items[id].type === 'main' ? <div key={'main' + id} className="white--space__main"></div> : ""} */ }
      tableRows.push(
        <tr key={id} className={props.generalTexts.items[id].type === 'main' ? "bold ws__top--md" : ""} >
          <td>{props.generalTexts.items[id].number}. </td>
          <td>{props.generalTexts.items[id].message}</td>
          <td>{item.price}</td>
        </tr >
      )
      return true
    })
  }

  return (
    <table className="vl-data-table table">
      <thead>
        <tr>
          <th colSpan="2">
            <h3 className="vl-title vl-title--h3 vl-title--sans">{props.type === "donations" ? data.donations.title : data.expenses.title} </h3>
          </th>
          <th>EUR</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
        <tr className="bold total" >
          <td colSpan="2">TOTAAL BEDRAG </td>
          <td>{props.type === "donations" ? props.data.totalDonations : props.data.totalExpenses}</td>
        </tr>
      </tbody>
    </table>
  )
}
