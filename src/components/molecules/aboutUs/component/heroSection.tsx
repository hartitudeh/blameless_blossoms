"use client";

// import { StaticImageData } from "next/image";
import styled from "styled-components";
import Text from "@/components/atoms/text";
import Image from "@/components/atoms/image";
import AboutImg from "../../../../../public/assets/image/imisi.png";
import Flex from "@/components/atoms/flex";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import SectionLayout from "@/components/atoms/sectionLayout";
import ReusableHeader from "@/components/atoms/reuseableHeader";

const AboutMeWrapper = styled.div`
  background: #154c79;
  height: fit-content;
  padding: 3rem;


  @media (max-width: 900px) {
    padding: 1.5rem 0rem;
  }
`;

const TextWrapper = styled.div`
height: 550px;
// box-shadow: rgb(66 56 56 / 40%) 0px 0px 10px 3px;
border-radius: 3rem 0 0 3rem;
// overflow-x: scroll;
padding: 2rem;

@media (max-width: 900px) {
    border-radius: 1rem 1rem 0 0;
    padding: 0px;
    // box-shadow: none;

  }
`;

export const AboutPage = () => {
  const { isMobile } = useScreenResolution();
  return (
    <>
      
      <ReusableHeader text="About Me" />

      <AboutMeWrapper>
        <SectionLayout height="100%" data-aos="fade-up">
          <Flex
            direction={isMobile ? "column" : "row"}
            justify="space-between"
            styles={{
              boxShadow: isMobile ? "none" : "0 4px 8px rgba(0, 0, 0, 0.1",
              padding: isMobile ? "1rem" : "2rem",
              borderRadius: isMobile ? "1rem" : "4rem",
              background: "#fff",
              margin: "5rem auto",
              height: "fit-content",
            }}
          >
            <TextWrapper>
            <Flex
              direction="column"
              gap="0.1"
              styles={{
                padding: "2rem",
                height: "100%",
                overflowY: isMobile ? "scroll" : "auto",
              }}
            >
              <Text
                styles={{
                  textAlign: isMobile ? "left" : "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "0 0 1rem 0",
                }}
                type="p"
                text="Ayooluwa Adekoya is a dynamic and  budding modern-day polymath who 
                navigates the intersection between the clinical, academic, social, entrepreneurial, 
                creative, and administrative aspects of medicine."
              />
              <Text
                styles={{
                   textAlign: isMobile ? "left" : "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="She aspires to create multifaceted outstanding impacts through successfully 
                established platforms across various spheres towards a global paradigm shift."
              />
              <Text
                styles={{
                   textAlign: isMobile ? "left" : "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="She's passionate about designing foundation and fortification for 
                children to have a better quality of life using a systems thinking approach."
              />
              <Text
                styles={{
                   textAlign: isMobile ? "left" : "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="She's also described as a healthy communicator who harnesses and enlightens 
                on the curative approach to healthy communication and relationships through literacy 
                and social connectivity."
              />
              <Text
                styles={{
                   textAlign: isMobile ? "left" : "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="She is privileged to be a servant leader through kingdom ministries and corporate organizations.
                Ayooluwa is married to Oluwafemi Adekoya and they are blessed with children."
              />
              </Flex>
            </TextWrapper>
            <Image
              styles={{
                float: "left",
                transform: "scaleX(-1)",
                width: isMobile ? "50%" : "100%",
                height: "auto",
                marginRight: "2rem",
                margin: isMobile ? "0 0 1rem 0" : "auto",
                position: "relative",
                bottom: isMobile ? "-30px" : "-35px",
              }}
              src={AboutImg}
              alt="About Me Image"
            />
          </Flex>
        </SectionLayout>
      </AboutMeWrapper>
    </>
  );
};
