import React from 'react'
import data from '../utils/demoData'


export default function Tabel() {
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
        {data.income.items.map((item, id) => {
          if (item.sub) {
            item.sub.map((subItem, subId) => {
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
        }
      </tbody>
    </table>
  )
}
