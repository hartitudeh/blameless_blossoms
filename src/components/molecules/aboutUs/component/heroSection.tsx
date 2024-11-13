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
box-shadow: rgb(66 56 56 / 40%) 0px 0px 10px 3px;
border-radius: 3rem 0 0 3rem;
// overflow-x: scroll;
padding: 2rem;

@media (max-width: 900px) {
    border-radius: 3rem;
    padding: 0px;
    box-shadow: none;
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
              borderRadius: isMobile ? "2rem" : "4rem",
              background: "#fff",
              margin: "rem",
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
                overflowY: "scroll"
              }}
            >
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "0 0 1rem 0",
                }}
                type="p"
                text="Ayooluwa Adekoya is a refined and strategic leader & aspiring 
                modern-day polymath propagating positive impacts through multifaceted 
                outstanding achievements and successfully established platforms across 
                diverse spheres of influence. She harnesses a system thinking, dynamic, 
                and multi-talented approach to fill the gap of a missing or weak foundation 
                & fortification for children to have a better quality of life and a global paradigm shift."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="A community-based organization lead, Co-founder/Executive Director of Fragrant Stars, a faith-based NGO raising youngsters as transgenerational and transformational leaders with vitality and excellence through interpersonal and community-based impact-driven interventions, especially mentorship, advocacy, and outreaches in line with the UN SDGs.
She also serves as a team lead/director, member of the board, advisor, or mentor for other child & youth CSOs and corporates."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="Ayooluwa is a medical doctor working towards quality assurance in Sexual, Reproductive, Maternal, Newborn, Child, and Adolescent Health (SRMNCAH), especially preventive child health such as immunization and health education. She is an early career researcher who engages public health approach to the management of infectious, traumatic, psychological, and neurological diseases, adolescent pregnancy, and children with special needs. She has worked with private and public hospitals and is currently the management executive of a mobile health start-up, Beulah Worth Builders, a social impact enterprise building inestimable worth in individuals, investments, and institutions through health and other areas of socioeconomic development especially among the marginalized."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="The Creative Director and CEO of Nectar Words, a communication start-up concerned with writing, editing, proofreading, and publishing, including other subsidiaries like public speaking/events and academy. This includes communication, adult literacy, and writing masterclasses, and the child communication academy, especially the Juvenile Writers Club. She has worked as a Lead/Managing Editor with publishing firms and registered bodies to design modus operandi and coordinate teams to produce books, magazines, and newsletters, including helping individuals with writing and publishing support for their books or other projects."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="Ayooluwa is a pastor and certified child & teens handler, adolescent mentor; a family life conference speaker at children, teenagers, youths, and singles/ladies gatherings & events within and outside the church. She raises ladies as transgenerational and transformational leaders through the Crafted as Jewels Girls Crib of Fragrant Stars."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="She’s an academic influencer passionate about academic excellence. She has been creating charity (tuition fee and stipend) support for indigent pupils/students at primary, secondary, and tertiary levels, organizing education fairs, speaking at academic summits and inter-school contests to innovatively solve problems in the field of education through Fragrant Stars and other platforms."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="A singer-songwriter and child musicologist talented with songwriting, singing, composing, and playing musical instruments. She has been teaching children music as a home tutor or in institutionalized settings like orphanages. Together with her husband, they host a yearly family worship, Generations and Nations Worship Encounter converging families to worship God through music, prayer, word, and fellowship."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="As a writer, she's a poet, creative nonfiction, and child literature writer with works published in reputable literary magazines. She's the author of Comrade of Comfort, a poetry collection offering comfort to the weary from the scriptures."
              />
              <Text
                styles={{
                  textAlign: "justify",
                  color: "#5d5d5d",
                  fontWeight: 400,
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  margin: "1rem 0",
                }}
                type="p"
                text="She's married to Oluwafemi Olaide Adekoya (Èrí-Ìfé), the phenomenal man who always allows her to find her place first in his ribcage and to a larger world.
They are blessed with two treasured seeds, Isinmioluwa Shalom Imolemide and Ibukunoluwa Sharon Imo-Otito, daughters in whom the Lord takes delight, gives them joy, and shines light to the earth."
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
                bottom: isMobile ? "-28px" : "-39px",
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
