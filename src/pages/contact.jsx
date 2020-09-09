import React, { useEffect, useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';

const ContactPage = () => {
    let history = useHistory()

    return <div className="home page__content vl-layout vl-region vl-typography">
            <div id="contact-content" className="vl-grid">
                <div className="intro--text vl-col--6-12 div-center">
                    <p>Hier is onze contactpagina.</p>
                    <p>Deze toepassing is een proof of concept in het kader van de digitalisering van de verkiezingsprocedures. 
                        Meer informatie over het project vindt u op onze website.</p>
                    <p>Heeft u vragen over of suggesties voor dit project, aarzel niet om ons te contacteren via digitaalABB@vlaanderen.be.
                        We waarderen uw medewerking!</p>
                </div>
            </div>

            <div id="contact-us" className="text-center">
                <h2 className="vl-content-header__title">Contacteer Ons</h2>
                <div id="contact-links">
                    <a href="mailto:digitaalABB@vlaanderen.be">
                        <button className="vl-button">
                            <span className="vl-button-label">digitaalABB@vlaanderen.be</span>
                        </button>
                    </a>

                    <br />
                    
                    <a href="https://osoc20.github.io/simplification-election-procedures/" className="vl-button__label" target="_blank">
                        <button className="vl-button">
                            <span className="vl-button-label">Onze website</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>;
};

export default withRouter(ContactPage);