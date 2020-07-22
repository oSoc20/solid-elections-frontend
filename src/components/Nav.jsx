import React from 'react';


export default function Nav() {

  return (
    <div className="ex-nav vl-typography">

      <a href="/home/data" className="ex-nav--item au-c-heading au-c-heading--6">
        Toegang tot alle data
      </a>
      <a href="/home/declare" className="ex-nav--item au-c-heading au-c-heading--6">
        <span className="vl-icon vl-vi vl-vi-wrench" aria-hidden="true"></span>
        Aangifte Indienen
      </a>
    </div>
  )
}
