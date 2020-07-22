import React from 'react'

export default function SidePanel(props) {
  return (
    <div className="side-panel vl-col--3-12">
      <div className="person__info seperator ">
        <div className="person__info--year"><p>2018 </p></div>
        <div className="person__info--name">
          <h3 className="vl-title vl-title--h3 vl-title--sans">Sander Loones {props.data}</h3>
        </div>
        <div className="person__info--location"><p><span>N-VA</span> 6847 Koksijde-Oostendeduinkerken</p></div>
      </div>
      <div className="person__declaration--data--list  seperator">
        <div className="person__declaration--data--list--item ">
          <a href="/home" className="selected"> Bekijk gedetailleerde tabel</a>
        </div>
        <div className="person__declaration--data--list--item ">
          <a href="/home" className=""> Bekijk uitgavengrafiek</a>
        </div>
        <div className="person__declaration--data--list--item ">
          <a href="/home" className=""> Bekijk inkomstengrafiek</a>
        </div>
      </div>
      <div className="person__info__party__members">
        <h4 className="vl-title vl-title--h4 vl-title--sans">Lokale partijleden</h4>

        <div className="members__list">

          <a href="/home" className="members--person selected">
            <div className="vl-badge vl-badge--initials vl-badge--action">
              <span>5</span>
            </div>
            <div className="member--name">Sander Loones </div>
          </a>

          <a href="/home" className="members--person">
            <div className="vl-badge vl-badge--initials vl-badge--alt">
              <span>12</span>
            </div>
            <div className="member--name">Nawang Tendar </div>
          </a>

          <a href="/home" className="members--person">
            <div className="vl-badge vl-badge--initials vl-badge--alt">
              <span>2</span>
            </div>
            <div className="member--name">John Wick </div>
          </a>


        </div>
      </div>

    </div>
  )
}
