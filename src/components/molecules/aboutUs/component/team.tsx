import SectionLayout from "@/component/atom/SectionLayout";
import Flex from "@/component/atom/flex";
import Image from "@/component/atom/image";
import Text from "@/component/atom/text";
import styled from "styled-components";
import CardImg from "images/partner1.png";
import CardImgM from "images/partner1M.png";
import CardImg2 from "images/partner2.png";
import CardImg2M from "images/partner2M.png";
import SmartProgram from "./smartProgram";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

const AboutTeamWrapper = styled.div`
  background: #ffffff;
  padding: 6rem 12rem;

  @media (max-width: 900px) {
    padding: 5rem 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

const InnerCard = styled.div`
  position: absolute;
  bottom: -13.5rem;
  left: 0rem;
  background: #ffffff;
  width: 59rem;
  border-radius: 1.6rem;
  padding: 3.2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0px 4px 32px 0px #0000000d;

  @media (max-width: 900px) {
    width: 100%;
    height: fit-content;
    padding: 1.6rem;
    bottom: -13rem;
  }
`;

const AboutTeam = () => {
  const { isMobile } = useScreenResolution();

  return (
    <AboutTeamWrapper>
      <SectionLayout>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap={isMobile ? "1.5rem" : "1rem"}
          aos="fade-up"
        >
          <Text
            type="h2"
            text="Meet the leadership team"
            color="#151515"
            weight={700}
            size={isMobile ? "3.2rem" : "5.52rem"}
            font="Whyte Inktrap"
            styles={{
              lineHeight: isMobile ? "3.4rem" : "6.6rem",
              width: isMobile ? "32.3rem" : "80.8rem",
              textAlign: "center",
            }}
          />
          <Text
            type="p"
            text="Our study abroad, online college, and scholarship platform offers a wide range of benefits to students looking to achieve their academic and career goals"
            color="#5D5D5D"
            font="Open sans"
            weight={400}
            size={isMobile ? "1.4rem" : "1.6rem"}
            styles={{
              lineHeight: isMobile ? "1.907rem" : "2.179rem",
              textAlign: "center",
              width: isMobile ? "35.8rem" : "72.2rem",
            }}
          />
        </Flex>
        <Flex direction="column" justify="space-between" gap="7rem">
          <Flex
            gap={isMobile ? "15rem" : "1.5rem"}
            justify={isMobile ? "space-between" : "center"}
            align="center"
            direction={isMobile ? "column" : "row"}
            margin="5rem 0"
          >
            <Card data-aos="fade-up">
              <Image
                src={isMobile ? CardImg2M : CardImg2}
                alt=""
                width={isMobile ? 358 : 590}
                height={isMobile ? 400 : 468}
                styles={{ objectFit: "cover", borderRadius: "3.2rem" }}
              />
              <InnerCard>
                <Text
                  type="h3"
                  text="Siddharth Maheshwari"
                  color="#000000"
                  weight={500}
                  font="Whyte Inktrap"
                  size="2.843rem"
                  styles={{ lineHeight: "3.412rem" }}
                />
                <Text
                  type="p"
                  text="Has led large product teams across Asia & Europe with Amazon. He graduated from Westminster, UK and holds MBA from Ivy league UCLA, USA."
                  color="#5D5D5D"
                  weight={400}
                  font="Open sans"
                  size={isMobile ? "1.4rem" : "1.6rem"}
                  styles={{ lineHeight: "2.179rem" }}
                />
              </InnerCard>
            </Card>
            <Card data-aos="fade-up">
              <Image
                src={isMobile ? CardImgM : CardImg}
                alt=""
                width={isMobile ? 358 : 590}
                height={isMobile ? 400 : 468}
                styles={{ objectFit: "cover", borderRadius: "3.2rem" }}
              />
              <InnerCard>
                <Text
                  type="h3"
                  text="Piyush Jain"
                  color="#000000"
                  weight={500}
                  font="Whyte Inktrap"
                  size="2.843rem"
                  styles={{ lineHeight: "3.412rem" }}
                />
                <Text
                  type="p"
                  text="Has led large product teams across Asia & Europe with Amazon. He graduated from Westminster, UK and holds MBA from Ivy league UCLA, USA."
                  color="#5D5D5D"
                  weight={400}
                  font="Open sans"
                  size={isMobile ? "1.4rem" : "1.6rem"}
                  styles={{ lineHeight: "2.179rem" }}
                />
              </InnerCard>
            </Card>
          </Flex>

          <SmartProgram />
        </Flex>
      </SectionLayout>
    </AboutTeamWrapper>
  );
};

export default AboutTeam;
