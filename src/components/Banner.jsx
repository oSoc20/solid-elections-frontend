/* eslint-disable react/prop-types */
import React from 'react'
import { withRouter, Link } from "react-router-dom";

let Banner = ({ match }) => {

  return (
    <header id='top__target' className=" ex-banner vl-content-header vl-content-header--large vl-content-header--show-mobile vl-content-header--has-context vl-content-header--has-actions vl-content-header--alt">
      <div className="vl-content-header__wrapper">
        <div className="vl-content-header__bg">
          <img sizes="100vw" src="//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg" srcSet="//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_mobile_alt/header.jpg 320w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg 1024w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_wide_alt/header.jpg 1600w" alt="Content Header" />
        </div>
        <div className="vl-layout">
          <div className="vl-content-header__content">
            <div className=" vl-content-header__content vl-content-header__context vl-content-header__context--has-link">
              <Link className="vl-content-header__context__link" to="/">Campaigndetail database </Link>
            </div>
            {match.path.includes('/stad/', 0) &&
              <h2 className="vl-content-header__title vl-content-header__title--has-link">
                <Link className="vl-content-header__title__link city__name" to={`/stad/${match.params.cityName}`}>{match.params.cityName} </Link>
              </h2>
            }
          </div>
        </div>
      </div>
    </header>
  )
}


export default withRouter(Banner)
