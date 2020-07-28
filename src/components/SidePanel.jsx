/* eslint-disable react/prop-types */
import React from 'react'
import { withRouter, useParams, Link } from "react-router-dom";
import demoPerson from '../utils/demoCandidate'

let SidePanel = (props) => {

  const { cityName } = useParams();
  const isCurrentCandidate = (name, familyName) => {
    console.log(props.currentPerson)
    if (props.currentPerson.name) {
      return (
        props.currentPerson.name.value.toLowerCase() === name.toLowerCase()
        && props.currentPerson.familyName.value.toLowerCase() === familyName.toLowerCase()
      )
    }
  }



  return (
    <div className="side-panel vl-col--3-12">
      <div className="person__info seperator ">
        <div className="person__info--name">
          <h3 className="vl-title vl-title--h3 vl-title--sans">
            {
              (props.currentPerson.name && props.currentPerson.familyName)
                ? props.currentPerson.name.value + " " + props.currentPerson.familyName.value
                : ""
            }
          </h3>
        </div>
        <div className="person__info--location"><p><span>
          {props.currentPerson.listName &&
            props.currentPerson.listName.value
          }
        </span>{` ${cityName}`}</p></div>
      </div>
      <div className="person__declaration--data--list seperator">
        <div className="person__declaration--data--list--item">
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

          <Link to="/" className={isCurrentCandidate(demoPerson.name.value, demoPerson.familyName.value) ? "members--person selected" : "members--person bold"}>
            <div className={isCurrentCandidate(demoPerson.name.value, demoPerson.familyName.value)
              ? `vl-badge vl-badge--initials vl-badge--action`
              : "vl-badge vl-badge--initials vl-badge--alt"}>
              <span>{1}</span>
            </div>
            <div className="member--name">{demoPerson.name.value}  {demoPerson.familyName.value}</div>
          </Link>


          {props.partyMembers &&
            props.partyMembers.map((member, id) => {
              console.log(isCurrentCandidate(member.name.value, member.familyName.value))
              if (member.webID) {
                return (
                  <Link key={id} to="/" className={isCurrentCandidate(member.name.value, member.familyName.value) ? "members--person selected" : "members--person bold"}>
                    <div className={isCurrentCandidate(member.name.value, member.familyName.value)
                      ? `vl-badge vl-badge--initials vl-badge--action`
                      : "vl-badge vl-badge--initials vl-badge--alt"}>
                      <span>{id + 2}</span>
                    </div>
                    <div className="member--name">{member.name.value}  {member.familyName.value}</div>
                  </Link>)
              } else {
                return (
                  <Link key={id} to="/" className="members--person detail__member--disable">
                    <div className="vl-badge vl-badge--initials vl-badge--alt">
                      <span>{id + 2}</span>
                    </div>
                    <div className="member--name">{member.name.value}  {member.familyName.value}</div>
                  </Link>
                )

              }


            })
          }




        </div>
      </div>

    </div>
  )
}
export default withRouter(SidePanel)