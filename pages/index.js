import React, { useRef } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features1 from "../components/features1";
import CTA from "../components/cta";
import Features2 from "../components/features2";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = (props) => {
  const myRef = useRef(null);

  const openGoogleFormCustomers = () => {
    window.open("https://forms.gle/zXhL7dm8HigkJ5jS6", "_blank");
  };

  const openGoogleFormPartners = () => {
    window.open("https://forms.gle/Vbq3t3Brqyxhytfo7", "_blank");
  };
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Metalised 3D</title>
        </Head>

        <Navbar
          scrollIntoView={() => myRef.current?.scrollIntoView()}
          link1="Metalised 3D"
          link2="Marketplace"
        ></Navbar>

        <Hero
          openGoogleFormCustomers={openGoogleFormCustomers}
          openGoogleFormPartners={openGoogleFormPartners}
          action2="Become a Designer or Partner"
          image1Src="https://3dprinting.com/wp-content/uploads/cameron-7.jpeg"
          image2Src="https://www.r3dprints.com.my/wp-content/uploads/2023/12/3d-printing-in-jewellery.png-2.png"
          image3Src="https://www.sculpteo.com/blog/wp-content/uploads/2019/06/Blog-headline-1-1.jpg"
          image5Src="https://cdn.prod.website-files.com/5e2473a79b89b61b1f3e3f38/6387ddc717d78e3b9e643cb5_3D%20Printing%20jewellery%20.jpeg"
          image6Src="https://3dbots.sg/wp-content/uploads/2017/04/3D-printed-jewelry1.jpg"
          image9Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJbIceDp5VQqHvBB-dmPbK7xUVA-xdd_-WA&amp;s"
          image1Src1="https://formlabs.com/_next/image/?url=https%3A%2F%2Fformlabs-media.formlabs.com%2Ffiler_public_thumbnails%2Ffiler_public%2F32%2Fa1%2F32a14c74-6fef-475a-b5ac-803f1a9968f5%2Fimage1.png__1354x0_subsampling-2.png&amp;w=3840&amp;q=75"
          image1Src2="https://i.all3dp.com/wp-content/uploads/2020/08/25132629/3D-printing-jewerly-Source-Materialise-scaled.jpg"
          rootClassName="heroroot-class-name"
        ></Hero>
        <div ref={myRef}>
          <Features1
            id="features"
            heading1="Join our mailing list!"
            feature1Title="Shop for Customized Accessories"
            feature2Title="Designer Creations"
            feature3Title="Business Partners"
            feature1ImgSrc="https://techcrunch.com/wp-content/uploads/2015/04/161884-zazzybannerphoto-8-360c4f-large-1427965292.jpg"
            feature2ImgSrc="https://www.romanjewelers.com/blog/upload/blog/1696268091_post_image.png"
            feature3ImgSrc="https://assets.entrepreneur.com/content/3x2/2000/20160520174625-co-founders-partnership-coworkers-meeting-office.jpeg"
            feature1Description="Discover custom jewelry and accessories crafted with cutting-edge metal-plastic hybrid 3D printing. Explore unique, high-quality pieces tailored just for you."
            feature2Description="Unleash your creativity! Submit your designs for jewelry and accessories using our metal-plastic hybrid 3D printing. Be part of our exclusive collections and shape the future of design."
            feature3Description="Partner with us to explore metal-plastic 3D printing solutions. Whether you're innovating or looking to invest, contact us to learn how our technology can elevate your business."
          ></Features1>
        </div>
        <CTA
          openGoogleFormCustomers={openGoogleFormCustomers}
          openGoogleFormPartners={openGoogleFormPartners}
          action1="Subscribe Now for Updates"
          action11="Become a Designer or Partner"
          content1="Be the first to know about our latest designs, exclusive opportunities, and innovations in metal-plastic hybrid 3D printing."
        ></CTA>
        <Contact></Contact>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default Home;
