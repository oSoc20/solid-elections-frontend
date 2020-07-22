import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, withRouter } from 'react-router-dom';

import BaseLayout from '../layouts/base';
import SidePanel from '../components/SidePanel'
import Tabel from '../components/Tabel'

import data from '../utils/demoData'

const PartyPage = () => {
  return <div className="home page__content vl-region">
    <div className="vl-layout content__wrapper vl-grid">
      <SidePanel data="helo data" />
      <div className="main-content  vl-col--9-12">

        <Tabel data={data.income} />

        <Tabel data={data.expense} />
      </div>
    </div>
  </div>;
};

export default withRouter(PartyPage);
