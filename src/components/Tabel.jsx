/* eslint-disable react/prop-types */
import React from 'react'
import data from '../utils/demoData'

export default function Tabel(props) {


  let tableRows = []

  // props.data.items.map((item, id) => {

  //   tableRows.push(
  //     <tr className="bold" key={id}>
  //       <td>{item.number}.</td>
  //       <td>{item.message}</td>
  //       <td >{item.price}</td>
  //     </tr>)
  //   if (item.sub) {
  //     item.sub.map((subItem, subId) => {
  //       console.log('sub')
  //       tableRows.push(
  //         <tr key={subId}>
  //           <td>{subItem.number}. </td>
  //           <td>{subItem.message}</td>
  //           <td>{subItem.price}</td>
  //         </tr>)
  //       return true
  //     })
  //   }
  //   return true
  // })


  props.data[props.type].map((item, id) => {

    //console.log(item)
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
