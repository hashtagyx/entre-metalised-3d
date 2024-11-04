import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Gallery1 from './gallery1'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-header78 ${props.rootClassName} `}>
        <div className="hero-column thq-section-max-width thq-section-padding">
          <div className="hero-content">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button1" onClick={props.openGoogleFormCustomers}>
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero-button2" onClick={props.openGoogleFormPartners}>
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <Gallery1
          image1Src="https://i.materialise.com/blog/wp-content/uploads/2017/10/medium-running-rabbit-ring-by-vulcan-jewelry-silver-high-gloss-1024x734.jpg"
          image2Src="https://3dprinting.com/wp-content/uploads/cameron-8.jpeg"
          image3Src="https://i.materialise.com/blog/wp-content/uploads/2020/11/small-frog-ring-by-peter-donders-brass-gold-plated-polished-2.jpg"
          rootClassName="gallery1root-class-name"
        ></Gallery1>
        <div>
          <div className="hero-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-container2 {
            display: contents;
          }
          .heroroot-class-name {
            background-color: #d9d9d9;
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button1 {
              width: 100%;
            }
            .hero-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  action2: 'Become a Designer or Partner',
  content1:
    'Explore a world of innovative designs crafted with cutting-edge technology. From jewelry to trinkets, find the perfect piece to express your style.',
  image5Src:
    'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEzM3w&ixlib=rb-4.0.3&q=80&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1461214626925-421f126d9f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEyOHw&ixlib=rb-4.0.3&q=80&w=1500',
  image2Src:
    'https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEyOXw&ixlib=rb-4.0.3&q=80&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEzNHw&ixlib=rb-4.0.3&q=80&w=1500',
  image1Src2:
    'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEzNHw&ixlib=rb-4.0.3&q=80&w=1500',
  action1: 'Subscribe Now for Updates',
  image6Src:
    'https://images.unsplash.com/photo-1483129804960-cb1964499894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEzMnw&ixlib=rb-4.0.3&q=80&w=1500',
  image1Src1:
    'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzE2MzEzNHw&ixlib=rb-4.0.3&q=80&w=1500',
  rootClassName: '',
  heading1: 'Discover Unique Metal-Plastic Hybrid 3D Printed Accessories',
}

Hero.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  image5Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image1Src2: PropTypes.string,
  action1: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero
