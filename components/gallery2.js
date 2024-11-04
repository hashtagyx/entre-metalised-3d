import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Gallery2 = (props) => {
  return (
    <>
      <div className="gallery2-gallery3 thq-section-padding">
        <div className="gallery2-max-width thq-section-max-width">
          <div className="gallery2-section-title">
            <h2 className="gallery2-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery2-text3">
                    Explore Our Unique Accessories
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery2-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery2-text4">
                    Discover a stunning collection of accessories crafted using
                    cutting-edge metal-plastic hybrid 3D printing technology.
                    Each piece is a blend of innovation and artistry, making it
                    a perfect addition to your style.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery2-content">
            <div className="gallery2-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery2-image1 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery2-image2 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery2-image31 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container4">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery2-image32 thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery2-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery2-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery2-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery2-text1 {
            text-align: center;
          }
          .gallery2-text2 {
            text-align: center;
          }
          .gallery2-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery2-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image1 {
            width: 100%;
            max-width: 600px;
            align-self: center;
          }
          .gallery2-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image2 {
            width: 100%;
            max-width: 600px;
            align-self: center;
          }
          .gallery2-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image31 {
            width: 100%;
            max-width: 600px;
          }
          .gallery2-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-image32 {
            width: 100%;
            max-width: 600px;
          }
          .gallery2-text3 {
            display: inline-block;
          }
          .gallery2-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery2-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery2-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-image31 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-image32 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
          }
          @media (max-width: 479px) {
            .gallery2-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery2.defaultProps = {
  image4Alt: 'Metal-Plastic Hybrid 3D Printed Ring',
  image2Alt: 'Metal-Plastic Hybrid 3D Printed Earrings',
  image4Src:
    'https://images.unsplash.com/photo-1573164713619-24c711fe7878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDM5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1723802205505-2f88b2227718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDM5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Metal-Plastic Hybrid 3D Printed Bracelet',
  image1Alt: 'Metal-Plastic Hybrid 3D Printed Necklace',
  image2Src:
    'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDM5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzI0MDM5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
}

Gallery2.propTypes = {
  image4Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Gallery2
