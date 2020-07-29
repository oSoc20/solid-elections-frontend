import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, useParams } from 'react-router-dom';

import SidePanel from '../components/SidePanel'
import Tabel from '../components/Tabel'

import data from '../utils/demoData'
import demoPerson from '../utils/demoCandidate'
import sunData from '../utils/sun_data';

import { getCandidateInfo } from 'solid-wrapper'
import { CandidateService } from '../api'
import { sortCandidates } from '../utils/sort'
import LocalState from '../utils/state'
import Sunburst from 'sunburst-chart';


const DetailPage = () => {

  let history = useHistory()
  const { cityName, partyName } = useParams()

  const [currentPerson, setCurrentPerson] = useState({})
  const [candidates, setCandidates] = useState([])
  const [currentPersonMoney, setCurrentPersonMoney] = useState([])

  const [loading, setLoading] = useState(true)

  //view type: table, sun-income, sun-expense
  const [viewType, setViewType] = useState('table')
  const myChart = Sunburst();

  const getInfo = async (webId) => {
    let info = await getCandidateInfo(webId, 'solidelections', 'g103.ttl')
    return info
  }

  let goToCandidate = (e) => {

    let selectedCandidate = candidates.find(candidate => {
      return (candidate.name.value.toLowerCase() + " " + candidate.familyName.value.toLowerCase() === e.target.getAttribute('data-candidate'))
    })

    if (e.target.getAttribute('data-candidate') === demoPerson.name.value.toLowerCase() + " " + demoPerson.familyName.value.toLowerCase()) {
      LocalState.setCurrentCandidate(demoPerson.personURI.value)
      setLoading(true)
      history.push(`/stad/${cityName}/${partyName}/${demoPerson.name.value + demoPerson.familyName.value}`)
    } else {
      LocalState.setCurrentCandidate(selectedCandidate.personURI.value)
      setLoading(true)
      history.push(`/stad/${cityName}/${partyName}/${selectedCandidate.name.value + selectedCandidate.familyName.value}`)
    }
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
  }, [loading])

  useEffect(() => {
    if (currentPerson.name) {
      if (currentPerson.name.value.toLowerCase() === demoPerson.name.value.toLowerCase()
        && currentPerson.familyName.value.toLowerCase() === demoPerson.familyName.value.toLowerCase()) {
        setCurrentPerson(demoPerson)
        //get expenses and income of demo candidate
        getInfo(demoPerson.webID.value)
          .then((res) => {
            setCurrentPersonMoney(res)
            setLoading(false)
          })
      } else {
        let selectedCandidate = candidates.find(candidate => {
          return (candidate.name.value.toLowerCase() + " " + candidate.familyName.value.toLowerCase() ===
            currentPerson.name.value.toLowerCase() + " " + currentPerson.familyName.value.toLowerCase())
        })

        //get expenses and income of selected candidate
        if (selectedCandidate) {
          getInfo(selectedCandidate.webID.value)
            .then((res) => {
              setCurrentPersonMoney(res)
              setLoading(false)
            })
        }
      }
    }
  }, [candidates, currentPerson, loading])

  

  useEffect(() => {

    // console.log('view chart')
    // myChart
    //   .data({
    //     name: "root",
    //     children: [
    //       {
    //         name: "leafA",
    //         value: 3
    //       },
    //       {
    //         name: "nodeB",
    //         children: [
    //           {
    //             name: "leafBA",
    //             value: 5
    //           },
    //           {
    //             name: "leafBB",
    //             value: 1
    //           }
    //         ]
    //       }
    //     ]
    //   })
    //   (document.getElementById('view'));
  }, [myChart])


  return <div className="home page__content vl-region">
    <div className="vl-layout content__wrapper vl-grid">
      <SidePanel onClick={goToCandidate} currentPerson={currentPerson} partyMembers={candidates} />
      <div className="main-content vl-col--9-12">
        {loading ?
          (
            <div className="vl-col--1-1">
              <div className="vl-region">
                <div className="vl-u-align-center">
                  <div className="vl-loader" role="alert" aria-busy="true"></div>
                  <p>
                    Pagina is aan het laden
                  </p>
                </div>
              </div>
            </div>
          ) :
          (
            <div id="view">
              {
                viewType === 'table' &&
                <>
                  <Tabel generalTexts={data.expenses} data={currentPersonMoney} type="expenses" />
                  <Tabel generalTexts={data.donations} data={currentPersonMoney} type="donations" />
                </>
              }

            </div>
          )
        }
      </div>
    </div>
  </div>
}

export default withRouter(DetailPage);
