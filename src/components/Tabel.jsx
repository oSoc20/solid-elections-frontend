import React from 'react'
import data from '../utils/demoData'


export default function Tabel(props) {


  let tableRows = []

  props.data.items.map((item, id) => {

    tableRows.push(
      <tr className="bold" key={id}>
        <td>{item.number}.</td>
        <td>{item.message}</td>
        <td >{item.price}</td>
      </tr>)
    if (item.sub) {
      item.sub.map((subItem, subId) => {
        console.log('sub')
        tableRows.push(
          <tr key={subId}>
            <td>{subItem.number}. </td>
            <td>{subItem.message}</td>
            <td>{subItem.price}</td>
          </tr>)
        return true
      })
    }
    return true
  })

  return (
    <table className="vl-data-table">
      <thead>
        <tr>
          <th colSpan="2">
            <h3 className="vl-title vl-title--h3 vl-title--sans">{data.income.title} </h3>
          </th>
          <th>EUR</th>
        </tr>
      </thead>

      <tbody>
        {tableRows}
        <tr className="bold total" >
          <td colSpan="2">TOTAAL BEDRAG </td>
          <td>{props.data.total}</td>

        </tr>
        {/* {data.income.items.map((item, id) => {
          if (item.sub) {
            item.sub.map((subItem, subId) => {
              console.log('sub')
              return (
                <tr key={subId}>
                  <td>{subItem.number} </td>
                  <td>{subItem.message}</td>
                  <td>{subItem.price}</td>
                </tr>)
            })
          }

          return (
            <tr key={id}>
              <td>{item.number} </td>
              <td>{item.message}</td>
              <td >{item.price}</td>
            </tr>)
        })
        } */}
      </tbody>
    </table>
  )
}
