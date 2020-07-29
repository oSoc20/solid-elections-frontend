import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, useParams } from 'react-router-dom';

import SidePanel from '../components/SidePanel'
import TabelExpense from '../components/TabelExpense'
import TabelIncome from '../components/TableIncome'

import textData from '../utils/textData'
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


  let changeView = (e) => {
    let view = e.target.getAttribute('data-view')
    let sunBursts = document.getElementsByClassName('sunburst-viz')

    if (view === 'table') {

      for (var i = 0; i < sunBursts.length; i++) {
        sunBursts[i].remove()
      }
    }
    setViewType(view)
  }

  let getIncomeDataForSun = () => {
    let income = {
      name: textData.donations.shortTitle,
      color: textData.donations.color,
      children: []
    }

    if (currentPersonMoney.donations) {
      currentPersonMoney.donations.map((donation, id) => {
        if (textData.donations.items[id].type === 'main') {
          income.children.push({
            name: textData.donations.items[id].short,
            color: textData.donations.items[id].color,
            children: [],
            value: donation.price
          })
        }

        if (textData.donations.items[id].type === 'sub') {
          income.children[income.children.length - 1].children.push({
            name: textData.donations.items[id].short,
            color: textData.donations.items[id].color,
            value: donation.price
          })
        }
        return true
      })
    }

    return income
  }

  let getExpenseDataForSun = () => {
    let income = {
      name: textData.expenses.shortTitle,
      color: textData.expenses.color,
      children: []
    }

    if (currentPersonMoney.expenses) {
      currentPersonMoney.expenses.map((expense, id) => {
        if (textData.expenses.items[id].type === 'main') {
          income.children.push({
            name: textData.expenses.items[id].short,
            color: textData.expenses.items[id].color,
            children: []
          })
        }

        if (textData.expenses.items[id].type === 'sub') {
          income.children[income.children.length - 1].children.push({
            name: textData.expenses.items[id].short,
            color: textData.expenses.items[id].color,
            value: expense.price,
            children: []
          })
        }

        if (textData.expenses.items[id].type === 'sub-sub') {
          let lastSubIndex = income.children[income.children.length - 1].children.length - 1

          //set to 0, total of children are counted to parent
          income.children[income.children.length - 1].children[lastSubIndex].value = 0
          income.children[income.children.length - 1].children[lastSubIndex].children.push({
            name: textData.expenses.items[id].short,
            color: textData.expenses.items[id].color,
            value: expense.price
          })
        }
        return true
      })
    }
    return income
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


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

    let removeExtraSun = () => {
      let sunBursts = document.getElementsByClassName('sunburst-viz')

      for (var i = 0; i < sunBursts.length - 1; i++) {
        sunBursts[i].remove()
      }

    }
    if (!loading) {
      if (viewType === "sun-income") {

        myChart
          .data(getIncomeDataForSun())
          .label('name')
          .tooltipContent((d, node) => `EUR: <i>${node.value}</i>`)
          .width(1000)
          .height(1000)
          .color('color')
          (document.getElementById('view'));

        removeExtraSun()
      }

      if (viewType === "sun-expense") {

        myChart
          .data(getExpenseDataForSun())
          .label('name')
          .tooltipContent((d, node) => `EUR: <i>${node.value}</i>`)
          .width(1000)
          .height(1000)
          .color('color')
          (document.getElementById('view'));
        removeExtraSun()
      }
    }
  }, [loading, myChart, viewType])


  return <div className="home page__content vl-region">
    <div className="vl-layout content__wrapper vl-grid">
      <SidePanel changeView={changeView} currentView={viewType} onClick={goToCandidate} currentPerson={currentPerson} partyMembers={candidates} />
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
                  <TabelExpense generalTexts={textData.expenses} data={currentPersonMoney} type="expenses" />
                  <TabelIncome generalTexts={textData.expenses} data={currentPersonMoney} type="donations" />
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
