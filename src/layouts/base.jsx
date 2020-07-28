import PropTypes from 'prop-types';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

const BaseLayout = (props) => {
  const { children } = props;

  return (
    <div className="App main__app">
      <Header />
      <Nav />
      <Banner />
      <main className="main__content">{children}</main>
      <Footer />
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
