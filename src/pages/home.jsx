import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BaseLayout from '../layouts/base';
import AutoSuggest from 'react-autosuggest'

import { UserService } from '../api'

const companies = [
  { id: 1, name: "Company1 Ppp" },
  { id: 2, name: "Company2" },
  { id: 3, name: "dompany3" },
  { id: 4, name: "Company4" },
  { id: 5, name: "bCompany5" },
  { id: 6, name: "Company6" },
  { id: 7, name: "dompany7" }
];



const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState()
  //const [suggestions, setSuggestions] = useState([])
  const [candidates, setCandidates] = useState([])


  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const lowerCasedCompanies = candidates.map((company, id) => {
    return {
      id: id,
      firstName: company.firstName.value.toLowerCase(),
      familyName: company.familyName.value.toLowerCase()
    };
  });

  const getSuggestions = (value) => {
    return lowerCasedCompanies.filter(company =>
      company.firstName.includes(value.trim().toLowerCase(),0)
    );
  }


  useEffect(() => {
    UserService.getCandidates()
      .then((res) => {
        setCandidates(res)

      }).catch((e) => console.log('nothing found'))
  }, [])

  console.log(candidates)


  return (
    <div className="home page__content vl-region">
      <div className="vl-layout content__wrapper vl-grid">
        <div className="container__search  vl-col--5-12">
          <div className="au-c-heading au-c-heading--4">
            Bekijk hier de inkomsten en uitgaven van geldmiddelen
            tijdens lokale verkiezingscampagnes.
          </div>

          <AutoSuggest
            suggestions={suggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            onSuggestionsFetchRequested={({ value }) => {
              console.log(value);
              setValue(value);
              setSuggestions(getSuggestions(value));
            }}
            onSuggestionSelected={(_, { suggestionValue }) =>
              console.log("Selected: " + suggestionValue)
            }
            getSuggestionValue={suggestion => suggestion.firstName + ' ' + suggestion.familyName}
            renderSuggestion={suggestion => <span className="name">{suggestion.firstName + ' ' + suggestion.familyName}</span>}
            inputProps={{
              placeholder: "Zoek naar een kandidaat of partij",
              value: value,
              onChange: (_, { newValue, method }) => {
                setValue(newValue);
              }
            }}
            highlightFirstSuggestion={true}
          />


        </div>
        <div className="main-content vl-col--5-12">

        </div>
      </div>
    </div>
  )
}
export default withRouter(HomePage);
