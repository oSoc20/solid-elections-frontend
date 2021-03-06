/* eslint-disable react/prop-types */
import React from 'react'
import { withRouter, useParams } from "react-router-dom";
import demoPerson from '../utils/demoCandidate'


let SidePanel = (props) => {

  const { cityName } = useParams()

  const isCurrentCandidate = (name, familyName) => {
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
        <div onClick={props.changeView} data-view="table"
          className={props.currentView === 'table' ? "person__declaration--data--list--item selected" : "person__declaration--data--list--item"}>
          Bekijk gedetailleerde tabel
        </div>
        <div onClick={props.changeView} data-view="sun-expense"
          className={props.currentView === 'sun-expense' ? "person__declaration--data--list--item selected" : "person__declaration--data--list--item"}
        >
          Bekijk uitgavengrafiek
        </div>
        <div onClick={props.changeView} data-view="sun-income"
          className={props.currentView === 'sun-income' ? "person__declaration--data--list--item selected" : "person__declaration--data--list--item"}
        >
          Bekijk inkomstengrafiek
        </div>
      </div>
      <div className="person__info__party__members">
        <h4 className="vl-title vl-title--h4 vl-title--sans">Kandidaten</h4>

        <div className="members__list">


          {/* demo person */}
          {/* <div onClick={props.onClick} data-candidate={demoPerson.name.value.toLocaleLowerCase() + " " + demoPerson.familyName.value.toLocaleLowerCase()} className={isCurrentCandidate(demoPerson.name.value, demoPerson.familyName.value) ? "members--person selected" : "members--person bold"}>
            <div data-candidate={demoPerson.name.value + " " + demoPerson.familyName.value} className={isCurrentCandidate(demoPerson.name.value, demoPerson.familyName.value)
              ? `vl-badge vl-badge--initials vl-badge--action`
              : "vl-badge vl-badge--initials vl-badge--alt"}>
              <span>{1}</span>
            </div>
            <div data-candidate={demoPerson.name.value.toLocaleLowerCase() + " " + demoPerson.familyName.value.toLocaleLowerCase()}
              className="member--name">{demoPerson.name.value}  {demoPerson.familyName.value}</div>
          </div> */}
          {/* end demo person */}

          {(props.partyMembers && props.currentPerson.name) &&
            props.partyMembers.map((member, id) => {
              if (member.webID) {
                return (
                  <div onClick={props.onClick} key={id} data-candidate={member.name.value.toLocaleLowerCase() + " " + member.familyName.value.toLocaleLowerCase()}
                    className={isCurrentCandidate(member.name.value, member.familyName.value) ? "members--person selected" : "members--person bold"}>
                    <div data-candidate={member.name.value.toLocaleLowerCase() + " " + member.familyName.value.toLocaleLowerCase()}
                      className={isCurrentCandidate(member.name.value, member.familyName.value)
                        ? `vl-badge vl-badge--initials vl-badge--action`
                        : "vl-badge vl-badge--initials vl-badge--alt"}>
                      <span>{id + 1}</span>
                    </div>
                    <div data-candidate={member.name.value.toLocaleLowerCase() + " " + member.familyName.value.toLocaleLowerCase()}
                      className="member--name">{member.name.value}  {member.familyName.value}</div>
                  </div>)
              } else {
                return (
                  <div key={id} data-candidate={member.name.value.toLocaleLowerCase() + " " + member.familyName.value.toLocaleLowerCase()} className="members--person detail__member--disable">
                    <div data-candidate={member.name.value.toLocaleLowerCase() + " " + member.familyName.value.toLocaleLowerCase()}
                      className="vl-badge vl-badge--initials vl-badge--alt">
                      <span>{id + 1}</span>
                    </div>
                    <div data-candidate={member.name.value.toLocaleLowerCase() + " " + member.familyName.value.toLocaleLowerCase()}
                      className="member--name">{member.name.value}  {member.familyName.value}</div>
                  </div>
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