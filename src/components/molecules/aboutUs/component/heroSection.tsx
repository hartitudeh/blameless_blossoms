"use client";

// import { StaticImageData } from "next/image";
import styled from "styled-components";
import Text from "@/components/atoms/text";
import Image from "@/components/atoms/image";
import AboutImg from "../../../../../public/assets/image/imisi.jpeg";
import CoverImg from "../public/assets/image/header-bg.jpg";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import SectionLayout from "@/components/atoms/sectionLayout";

const AllCountryHeader = styled.div`
  position: relative;
  width: 100%;
  height: 332px;

  & img {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }

  & h2 {
    position: absolute;
    top: 45%;
    text-transform: uppercase;
    left: 75%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: max-content;
    background: #06062a80;
    text-align: center;
    font-weight: 700 !important;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    width: 25%;
    font-size: 54px;
    padding: 0px 1rem;
    line-height: 1.5em;
    text-shadow: 0px 4px 79px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    @media screen and (max-width: 900px) {
      font-size: 24px;
      left: 50% !important;
      width: 100%;
      background: transparent;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 300px;
  // background: #06062a94;
  background: linear-gradient(
    90deg,
    rgb(0 0 0 / 10%) 45%,
    rgb(0 0 0 / 22%) 55%
  );
  @media screen and (max-width: 900px) {
    background: #06062a94;
  }
`;

const AboutMeWrapper = styled.div``;

export const AboutPage = () => {
  const { isMobile } = useScreenResolution();
  return (
    <AboutMeWrapper>
      <AllCountryHeader style={{ height: isMobile ? "160px" : "250px", marginBottom: isMobile?'0':'10px' }}>
        <Image
          src={CoverImg}
          alt=""
          height={isMobile ? 128 : 250}
        />
        <Overlay style={{ height: isMobile ? "128px" : "250px" }} />
        <Text
          text="About Me"
          type="h2"
          transform="uppercase"
          styles={{ width: "max-content" }}
        />
      </AllCountryHeader>

      <SectionLayout height="100%" data-aos="fade-up">
          <Image styles={{float: "left", width: isMobile ? "100%" : "40%", height: "auto", marginRight: "2rem", margin: isMobile ? "0 0 1rem 0" : "auto"}} src={AboutImg} alt="About Me Image" />

          {/* About Text */}
          <Text styles={{flex: 1, textAlign: "justify"}}
            type="p" 
            text={`
              Welcome to my blog! I'm excited to share my journey and stories with you.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              Thank you for joining me on this journey!
            `}
          />
          </SectionLayout>
          </AboutMeWrapper>
  );
};
