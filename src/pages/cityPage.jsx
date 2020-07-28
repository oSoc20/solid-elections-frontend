import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, useParams } from 'react-router-dom';

import LocalState from '../utils/state'
import { PartyService } from '../api'

import PartyCard from '../components/PartyCard'
import { sortParties } from '../utils/sort'

const CityPage = () => {

  let history = useHistory()
  let { cityName } = useParams()
  const [parties, setParties] = useState([])

  useEffect(() => {
    PartyService.getParties(LocalState.getCurrentCity())
      .then(res => {
        setParties(sortParties(res.result))
      }).catch((e) => console.log('nothing found', e))
  }, [])

  const onClickPartyCard = (e) => {
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
