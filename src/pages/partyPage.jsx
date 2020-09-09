import React, { useEffect, useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';

import demoPerson from '../utils/demoCandidate'

import LocalState from '../utils/state'
import { CandidateService } from '../api'
import CandidateCard from '../components/CandidateCard'
import { sortCandidates } from '../utils/sort'

const PartyPage = () => {

  let history = useHistory()
  let { cityName, partyName } = useParams()
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    CandidateService.getCandidates(LocalState.getCurrentParty())
      .then(res => {
        setCandidates(sortCandidates(res.result))
        setLoading(false)
      }).catch((e) => console.log('nothing found', e))
  }, [])

  const onClickCandidateCard = (e) => {

    let selectedCandidate = candidates.find(candidate => {
      return (candidate.name.value.toLowerCase() + " " + candidate.familyName.value.toLowerCase() === e.target.getAttribute('data-candidate'))
    })

    if (!loading) {
      if (e.target.getAttribute('data-candidate') === demoPerson.name.value.toLowerCase() + " " + demoPerson.familyName.value.toLowerCase()) {
        LocalState.setCurrentCandidate(demoPerson.personURI.value)
        history.push(`/stad/${cityName}/${partyName}/${demoPerson.name.value + demoPerson.familyName.value}`)
      } else {
        if (selectedCandidate) {
          LocalState.setCurrentCandidate(selectedCandidate.personURI.value)
          history.push(`/stad/${cityName}/${partyName}/${selectedCandidate.name.value + selectedCandidate.familyName.value}`)
        }
      }
    }
  }

  return <div className="home page__content vl-layout vl-region vl-typography">
    <h2 className="vl-content-header__title vl-content-header__title--has-link">
      {`Kandidaten van ${partyName.toUpperCase()}`}
    </h2>
    <div className="main-content vl-grid">
      {/* <CandidateCard onClick={demoPerson.webID ? onClickCandidateCard : null} submitted={demoPerson.webID ? true : false} name={demoPerson.name.value + " " + demoPerson.familyName.value} /> */}
      {
        candidates.map((candidate, id) => {
          return <CandidateCard onClick={candidate.webID ? onClickCandidateCard : null} submitted={candidate.webID ? true : false} name={candidate.name.value + " " + candidate.familyName.value} key={id} />
        })
      }
    </div>
  </div>;
};

export default withRouter(PartyPage);
