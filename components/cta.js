import React from 'react'

import PropTypes from 'prop-types'

const CTA = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="thq-heading-2">{props.heading1}</span>
                  <p className="thq-body-large">{props.content1}</p>
                </div>
                <div className="cta-actions">
                  <button
                    type="button"
                    className="cta-button1 thq-button-filled"
                    onClick={props.openGoogleFormCustomers}
                  >
                    {props.action1}
                  </button>
                  <button
                    type="button"
                    className="cta-button2 thq-button-filled"
                    onClick={props.openGoogleFormPartners}
                  >
                    {props.action11}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta-accent2-bg {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .cta-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .cta-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .cta-container2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .cta-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .cta-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: flex-end;
          }
          .cta-button1 {
            flex-basis: 100%;
          }
          .cta-button2 {
            color: rgb(237, 42, 79);
            flex-basis: 100%;
            background-color: rgb(217, 217, 217);
          }
          @media (max-width: 767px) {
            .cta-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .cta-actions {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .cta-button1 {
              flex: 1;
            }
            .cta-button2 {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

CTA.defaultProps = {
  content1:
    'Be the first to explore new designs, access exclusive collaborations, and learn more about our innovative 3D printing technology. Tell us what excites you most!',
  heading1: 'Join Our Community!',
  action11: 'Subscribe now',
  action1: 'Subscribe now',
}

CTA.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action11: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA