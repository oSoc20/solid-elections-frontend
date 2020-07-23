import React from 'react'

export default function Banner() {
  return (
    <header className=" ex-banner vl-content-header vl-content-header--large vl-content-header--show-mobile vl-content-header--has-context vl-content-header--has-actions vl-content-header--alt">
      <div className="vl-content-header__wrapper">
        <div className="vl-content-header__bg">
          <img sizes="100vw" src="//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg" srcSet="//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_mobile_alt/header.jpg 320w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg 1024w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_wide_alt/header.jpg 1600w" alt="Content Header" />
        </div>
        <div className="vl-layout">
          <div className="vl-content-header__content">
            <div className=" vl-content-header__content vl-content-header__context vl-content-header__context--has-link">
              <a className="vl-content-header__context__link" href="http://www.google.com">Campaigndetail database</a>
            </div>
            <h2 className="vl-content-header__title vl-content-header__title--has-link">
              <a className="vl-content-header__title__link" href="/party">Koksijde-Oostduinkerken</a>
            </h2>
          </div>
        </div>
      </div>
    </header>
  )
}
