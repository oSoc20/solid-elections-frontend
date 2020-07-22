import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Router from './router'

import IconManager, {
  iconRealEstateAddressBook1,
  iconWindowEmail,
  iconLinkedin,
  iconHelicopter,
  iconHotelSpa,
  iconWrench,
  iconZoomIn,
  iconYoutube,
  iconYinYang
} from '@govflanders/vl-ui-icon/dist/js/icon';



function App() {

  const iconManager = new IconManager({
    iconRealEstateAddressBook1,
    iconWindowEmail,
    iconLinkedin,
    iconHelicopter,
    iconHotelSpa,
    iconWrench,
    iconZoomIn,
    iconYoutube,
    iconYinYang,
  });


  return (
    <Router />
  );
}

export default App;
