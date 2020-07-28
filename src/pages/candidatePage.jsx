import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, withRouter } from 'react-router-dom';

import BaseLayout from '../layouts/base';
import SidePanel from '../components/SidePanel'
import Tabel from '../components/Tabel'

import data from '../utils/demoData'
import data2 from '../utils/demoData2'


import { getCandidateInfo } from 'solid-wrapper'
import { CandidateService } from '../api'
import { sortCandidates } from '../utils/sort'
import LocalState from '../utils/state'

const DetailPage = () => {

  const [currentPerson, setCurrentPerson] = useState({})
  const [candidates, setCandidates] = useState([])
  const [moneyInfo, setMoneyInfo] = useState({})

  

  const getInfo = async () => {
    let allInfos = []

    for (let i = 0; i < 50; i++) {
      allInfos.push(getCandidateInfo('https://koen101.solid.community/profile/card#me', 'solidelections', 'g103.ttl'))
    }

    await Promise.all(allInfos).then(values => {
      console.log(values)
    });
  }

  useEffect(() => {
    CandidateService.getCandidates(LocalState.getCurrentParty())
      .then(res => {
        setCandidates(sortCandidates(res.result))
      }).catch((e) => console.log('nothing found', e))
  }, [])

  useEffect(() => {
    CandidateService.getCandidate(LocalState.getCurrentCandidate())
      .then(res => {
        setCurrentPerson(res.result[0])
      }).catch((e) => console.log('nothing found', e))
  }, [])

  useEffect(() => {
    //getInfo()

    console.log(candidates)
    console.log(currentPerson)
  }, [candidates, currentPerson])

  return <div className="home page__content vl-region">
    <div className="vl-layout content__wrapper vl-grid">
      <SidePanel currentPerson={currentPerson} partyMembers={candidates} />
      <div className="main-content vl-col--9-12">
        <Tabel generalTexts={data.expenses} data={data2} type="expenses" />
        <Tabel generalTexts={data.donations} data={data2} type="donations" />
      </div>
    </div>
  </div>;
};

export default withRouter(DetailPage);
