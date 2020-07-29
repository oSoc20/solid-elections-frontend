/* eslint-disable react/prop-types */
import React from 'react'

export default function CandidateCard(props) {
  return (
    <div onClick={props.onClick} data-candidate={props.name?.toLowerCase()}
      className={props.submitted ? 'list__card vl-col--3-12' : 'list__card vl-col--3-12 list__card--disabled'}>
      <h3 data-candidate={props.name?.toLowerCase()} className="vl-content-header__title vl-content-header__title--has-link">
        {props.name}
      </h3>
      {props.submitted ?
        (<div onClick={props.onClick} data-candidate={props.name?.toLowerCase()} className="submitted__good">Aangifte</div>
        ) :
        (
          <div className="submitted__bad">Geen Aangifte</div>
        )
      }
    </div>
  )
}
