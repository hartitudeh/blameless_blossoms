"use client";

import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Image from "@/components/atoms/image";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import styled from "styled-components";
// import HomeImg from "../../../../../public/assets/image/imisi.png";
import HomeImgM from "../../../../../public/assets/image/logo/logoM.png";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
// import { LuCheckCircle2 } from "react-icons/lu";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 70vh;
  max-height: 86rem;
  background: #154c79;
  // background: #421416;
  // position: relative;
  // top: 10.3rem;
  padding-top: 5vh;


  // padding: 10rem 12rem;

  z-index: 1000;

  @media (max-width: 900px) {
    overflow: hidden;
    padding-bottom: 5rem;
    height: 100%;
    max-height: 100%;
    margin-top: -1rem;
  }
`;

const HeroImageSection = styled.div`
  border-top-left-radius: 5rem;
  width: 40%;
  display: flex;
  position: relative;


  @media (max-width: 900px) {
    margin-top: 2rem;
    width: 100%;
    height: auto;
    right: 38%;
    top: 10%;
  }

  & img {
    // position: relative;
    // bottom: -7.45%;
    // left: -40%;
    height: 100% !important;
    width: 100%;

    // @media (max-width: 900px) {
    //   left: -24%;
    // }
  }


`;

export const HomeComponent = () => {
  const { isMobile } = useScreenResolution();
  return (
    <HomePageWrapper>
      <SectionLayout height="100%" data-aos={isMobile ? "" : "fade-up"}>
        <Flex
          justify="space-between"
          height="100%"
          align="center"
          gap={isMobile ? "5rem" : "5rem"}
          direction={isMobile ? "column" : "row"}
          styles={{ position: "relative", textAlign: isMobile ? "center" : "left" }}
        >
          <HeroImageSection>
            <Image
              src={HomeImgM}
              alt=""
              height={700}
              width={700}
            />
          </HeroImageSection>
          <Flex
            direction="column"
            justify="center"
            gap="2rem"
            margin={isMobile ? "0" : "2rem 0 0 0"}
          >
            <Text
              type="h1"
              text="BLAMELESS BLOSSOM"
              weight={500}
              size={isMobile ? "4.63rem" : "5.734rem"}
              styles={{
                lineHeight: isMobile ? "4.8rem" : "8rem",
                letterSpacing: "-2.8%",
                fontFamily: "Whyte Inktrap",
                marginBottom: "0px",
                textAlign: isMobile ? "center" : "left",
              }}
              color="#edfff7"
              width={isMobile ? "100%" : "100%"}
            />

            <Text
              type="p"
              text="She's the co-founder and Executive Director of Fragrant Stars, 
              a faith-based NGO raising children, adolescents, and young adults."
              color="#17F7DE"
              font="Open Sans"
              size={isMobile ? "1.8rem" : "2rem"}
              weight={400}
              styles={{ lineHeight: isMobile ? "2.732rem" : "2.507rem", margin: "0" }}
              width={isMobile ? "100%" : "64.8rem"}
            />
            <Text
              type="p"
              text="She's also the CEO of Nectar Words, a communication venture providing 
              impeccable solutions to the need for words."
              color="#17F7DE"
              font="Open Sans"
              size={isMobile ? "1.8rem" : "2rem"}
              weight={400}
              styles={{ lineHeight: isMobile ? "2.732rem" : "2.507rem", margin: "0px" }}
              width={isMobile ? "100%" : "64.8rem"}
            />
            <Link href="/about-us">
              <Text
                type="p"
                text="Read More"
                color="rgb(237, 255, 247)"
                font="Open sans"
                size="1.6rem"
                weight={600}
                styles={{
                  lineHeight: "2.179rem",
                  border: "1px solid #17f7de",
                  width: "13rem",
                  padding: "1rem",
                  paddingLeft: "2rem",
                  borderRadius: "4rem",
                }}
              />
            </Link>
          </Flex>

        </Flex>
      </SectionLayout>
    </HomePageWrapper>
  );
};
