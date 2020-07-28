/* eslint-disable react/prop-types */
import React from 'react'

export default function PartyCard(props) {
  return (
    <div onClick={props.onClick} data-party={props.name.toLowerCase()} className="list__card vl-col--3-12">
      <h3 data-party={props.name.toLowerCase()} className="vl-content-header__title vl-content-header__title--has-link">
        {props.name}
      </h3>
    </div>
  )

}
