"use client";


import { AboutPage } from "./component/heroSection";
import { CarouselWithModal } from "./component/carouselWithModal";

const AboutUsPage = () => {

  return (
    <>
      <AboutPage />
      <CarouselWithModal />
      
      <div
        style={{
          padding: "5rem 0", 
          background: "#fff",
        }}
      >
      </div>
    </>
  );
};

export default AboutUsPage;
