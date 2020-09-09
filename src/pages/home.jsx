import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import AutoSuggest from 'react-autosuggest'

import { CityService } from '../api'
import LocalState from '../utils/state'

const HomePage = () => {
  let history = useHistory();

  const [cities, setCities] = useState([])
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const lowerCasedCities = cities.map((city, id) => {
    return {
      id: id,
      name: city.cityName.value.toLowerCase(),
      uri: city.cityURI.value,
      label: city.locationLabel.value

    };
  });

  const getSuggestions = (value) => {
    return lowerCasedCities.filter(city =>
      city.name.includes(value.trim().toLowerCase(), 0)
    );
  }

  useEffect(() => {
    if (cities.length === 0) {
      CityService.getCities()
        .then((res) => {
          setCities(res.result)
        }).catch((e) => console.log('nothing found', e))
    }
  }, [cities.length])

  const goToCity = (cityName) => {

    let selectedCity = cities.find(city => {
      return city.cityName.value.toLowerCase() === cityName
    })

    LocalState.setCurrentCity(selectedCity.cityURI.value)
    history.push(`/stad/${selectedCity.cityName.value}`)
  }

  return (
    <div className="home page__content vl-region ">
      <div className="vl-layout content__wrapper vl-grid">
        <div className="container__search  vl-col--5-12">
          <div className="au-c-heading au-c-heading--4">
            Bekijk hier de verkiezingsuitgaven en de herkomst van de geldmiddelen voor de lokale en provinciale verkiezingen
          </div>

          <AutoSuggest
            suggestions={suggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            onSuggestionsFetchRequested={({ value }) => {
              setValue(value);
              setSuggestions(getSuggestions(value));
            }}
            onSuggestionSelected={(_, { suggestionValue }) => {
              goToCity(suggestionValue)
            }
            }
            getSuggestionValue={suggestion => suggestion.name}
            renderSuggestion={suggestion => <span className="name">{suggestion.name} {`(${suggestion.label})`}</span>}
            inputProps={{
              placeholder: "Zoek naar een gemeente",
              value: value,
              onChange: (_, { newValue, method }) => {
                setValue(newValue);
              }
            }}
            highlightFirstSuggestion={true}
          />
        </div>
        <div className="vl-typography container__intro vl-col--5-12">
          <p className="intro--text">
            In deze applicatie kunt u de verkiezingsuitgaven en de herkomst van de geldmiddelen voor de lokale en provinciale verkiezingen terugvinden. 
            Dit kan zowel voor lijsten als voor specifieke kandidaten. 
            In de zoekbalk hiernaast kunt u de gegevens van een specifieke gemeente, provincie of stadsdistrict naar keuze opvragen.
          </p>
        </div>
      </div>
    </div>
  )
}
export default withRouter(HomePage);
