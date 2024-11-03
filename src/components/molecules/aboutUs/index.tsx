"use client";

// import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
// import Partner from "../../atom/partners";
// import Testimonials from "@/components/atoms/testimonial";
import { AboutPage } from "./component/heroSection";
import { CarouselWithModal } from "./component/carouselWithModal";
import { BookFlipComponent } from "@/components/atoms/bookSlide";


// import AboutTeam from "./component/team";

const AboutUsPage = () => {
  // const { isMobile } = useScreenResolution();

  return (
    <>
      <AboutPage />
      <BookFlipComponent />
      {/* <Testimonials /> */}
      <CarouselWithModal />
      
      <div
        style={{
          padding: "5rem 0", 
          background: "#fff",
        }}
      >
        {/* <Partner
          title={
            isMobile
              ? "Collaborative Partnerships Worldwide"
              : "Our Global Partners"
          }
          description={
            isMobile
              ? "Our Collaborative Partnerships worldwide, prestigious institutions who believe in, and share our Vision with us."
              : "Our study abroad, online college, and scholarship platform offers a wide range of benefits to students looking to achieve their academic and career goals"
          }
        /> */}
      </div>
    </>
  );
};

export default AboutUsPage;
