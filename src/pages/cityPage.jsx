import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, withRouter, useParams } from 'react-router-dom';

import BaseLayout from '../layouts/base';
import SidePanel from '../components/SidePanel'
import Tabel from '../components/Tabel'

import data from '../utils/demoData'
import data2 from '../utils/demoData2'

import LocalState from '../utils/state'
import { PartyService } from '../api'

import PartyCard from '../components/PartyCard'
import { sortParties } from '../utils/sort'

const CityPage = () => {

  let history = useHistory()
  let { cityName, partyName } = useParams()
  const [parties, setParties] = useState([])

  //console.log(LocalState.getCurrentCity())

  useEffect(() => {
    PartyService.getParties(LocalState.getCurrentCity())
      .then(res => {
        console.log(res.result)
        //console.log(sortParties(res.result))
        setParties(sortParties(res.result))
      }).catch((e) => console.log('nothing found', e))
  }, [])

  const onClickPartyCard = (e) => {


    console.log(e.target.getAttribute('data-party'))
    let selectedParty = parties.find(party => {
      return party.listName.value.toLowerCase() === e.target.getAttribute('data-party')
    })



    LocalState.setCurrentParty(selectedParty.listURI.value)
    history.push(`/stad/${cityName}/${selectedParty.listName.value.toLowerCase().replace('/', '-')}`)
  }
  return <div className="home page__content vl-layout vl-region vl-typography">
    <h2 className="vl-content-header__title vl-content-header__title--has-link">
      Lijst van kandidatenlijst
    </h2>
    <div className="main-content vl-grid">
      {
        parties.map((party, id) => {
          return <PartyCard onClick={onClickPartyCard} key={id} name={party.listName.value} />
        })
      }


    </div>
  </div>;
};

export default withRouter(CityPage);
