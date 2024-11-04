import React from 'react'

import PropTypes from 'prop-types'

const Gallery1 = (props) => {
  return (
    <>
      <div className={`gallery1-gallery3 ${props.rootClassName} `}>
        <div className="gallery1-max-width thq-section-max-width">
          <div className="gallery1-section-title"></div>
          <div className="gallery1-content">
            <div className="gallery1-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery1-gallery3 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-max-width {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery1-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1root-class-name {
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .gallery1-content {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery1.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDQ5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: '3D printed necklace',
  image2Src:
    'https://images.unsplash.com/photo-1702325107940-88f9cd4468c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDQ5Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Metal-plastic hybrid bracelet',
  image1Src:
    'https://images.unsplash.com/photo-1535954741680-a2e24eb05418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDQ5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  image3Alt: 'Innovative ring designs',
}

Gallery1.propTypes = {
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image3Alt: PropTypes.string,
}

export default Gallery1
