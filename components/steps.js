import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container1 thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container2 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps-actions">
                <button className="thq-button-animated thq-button-filled steps-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps-text14 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text15 thq-heading-3">01</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps-text17 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps-text18 thq-heading-3">02</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text20 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text21 thq-heading-3">03</label>
              </div>
              <div className="steps-container7 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text23 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text24 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container2 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text14 {
            text-align: center;
          }
          .steps-text15 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text17 {
            text-align: center;
          }
          .steps-text18 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text20 {
            text-align: center;
          }
          .steps-text21 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text23 {
            text-align: center;
          }
          .steps-text24 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
            .steps-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  step2Description:
    'Develop a mock marketplace platform using React that allows consumers to browse and purchase 3D-printed accessories, designers to showcase and sell their designs, and businesses to express interest in the technology.',
  step4Title: 'Promote the pre-MVP platform',
  step1Description:
    'Define the target audience for the marketplace, including consumers looking for customized 3D-printed accessories, designers interested in selling their creations, and businesses seeking metal-plastic hybrid 3D printing technology.',
  step4Description:
    'Drive traffic to the mock marketplace through targeted marketing campaigns to test the demand from consumers, engagement from designers, and interest from potential business partners.',
  step3Title: 'Implement mailing list subscription',
  step2Title: 'Create mock marketplace',
  step1Title: 'Identify target audience',
  step3Description:
    'Incorporate mailing list subscription buttons for consumers, designers, and business partners to gather leads and validate interest in the platform.',
}

Steps.propTypes = {
  step2Description: PropTypes.string,
  step4Title: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
  step3Title: PropTypes.string,
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps
