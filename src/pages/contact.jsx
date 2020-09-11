import React, { useEffect, useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';

const ContactPage = () => {
    let history = useHistory()

    return <div className="home page__content vl-layout vl-region vl-typography">
            <h2 id="contact-title" className="vl-content-header__title">Contacteer Ons</h2>
            <div id="contact-content" className="vl-grid">
                <div class="intro--text vl-col--6-12 div-center">
                    <p>Deze toepassing is een proof of concept in het kader van de digitalisering van de verkiezingsprocedures. Meer informatie over het project vindt u op onze website.</p>

                    <div class="contact-links">
                        <a href="https://osoc20.github.io/simplification-election-procedures/" className="vl-button__label" target="_blank">
                            <button className="vl-button">
                                <span className="vl-button-label">Onze website</span>
                            </button>
                        </a>
                    </div>
                    
                    <p>Heeft u vragen over of suggesties voor dit project, aarzel niet om ons te contacteren via onderstaand e-mailadres.</p>

                    <div class="contact-links">
                        <a href="mailto:digitaalABB@vlaanderen.be">
                            <button className="vl-button">
                                <span className="vl-button-label">digitaalABB@vlaanderen.be</span>
                            </button>
                        </a>
                    </div>

                    <p>We waarderen uw medewerking!</p>
                </div>
            </div>
        </div>
};

export default withRouter(ContactPage);