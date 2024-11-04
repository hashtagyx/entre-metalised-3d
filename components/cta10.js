import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const CTA10 = (props) => {
  return (
    <>
      <div className="cta10-container1 thq-section-padding">
        <div className="cta10-max-width thq-section-max-width">
          <div className="cta10-container2 thq-flex-row">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta10-text7">
                    Medium length heading goes here
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="cta10-content">
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="cta10-text5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="cta10-actions">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta10-text8">Action1</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button type="button" className="thq-button-outline">
                  <span>
                    {props.action2 ?? (
                      <Fragment>
                        <span className="cta10-text6">Action2</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta10-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta10-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cta10-container2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .cta10-content {
            gap: var(--dl-space-space-unit);
            width: 616px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .cta10-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta10-text5 {
            display: inline-block;
          }
          .cta10-text6 {
            display: inline-block;
          }
          .cta10-text7 {
            display: inline-block;
          }
          .cta10-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .cta10-container2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .cta10-max-width {
              background-color: transparent;
            }
            .cta10-content {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .cta10-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

CTA10.defaultProps = {
  content1: undefined,
  action2: undefined,
  heading1: undefined,
  action1: undefined,
}

CTA10.propTypes = {
  content1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA10
