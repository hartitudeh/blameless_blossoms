import { SimpleSlider } from "@/components/atoms/carousel";
import Flex from "@/components/atoms/flex";
import { SliderWrapper } from "@/components/atoms/testimonial";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 8rem;
  height: fit-content;


  @media (max-width: 900px) {
    height: 66rem;
  }
`;

const MyBooks = () => {
  const { isMobile } = useScreenResolution();

  const books = [
    {
      id: 1,
      title: "Specific To You",
      description:
        "Guaranteed remote internship in field of your choice at global companies.",
    },

    {
      id: 2,
      title: "Measurable Learning",
      description:
        "Over 100 courses by industry executives to succeed in your internship.",
    },

    {
      id: 3,
      title: "Readiness In Career",
      description:
        "Career readiness services such as resume writing and networking with industry.",
    },
    {
      id: 3,
      title: "Accessible Delivery",
      description:
        "Hybrid and bite-size 15-min content on mobile and web to learn anywhere and anytime.",
    },
    {
      id: 3,
      title: "Top Ranked Universities",
      description:
        "Comprehensive admission services from coaches, who have studied at Harvard, UCLA and MIT.",
    },
  ];
  return (
    <Wrapper data-aos='fade-up'>
      <Flex
        direction="column"
        justify="center"
        align="center"
        margin="0 0 6.5rem"
        gap="2rem"
      >
        <Text
          type="h2"
          text="Some Of My Books"
          color="#151515"
          weight={700}
          size={isMobile ? "3rem" : "5.52rem"}
          font="Whyte Inktrap"
          styles={{
            lineHeight: isMobile ? "3.4rem" : "6.6rem",
            textAlign: "center",
            width: isMobile ? "100%" : "80.8rem",
          }}
        />
        
        <Text
          type="p"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Molestiae eum officiis quasi accusamus quae temporibus ipsa dolorum 
          eligendi. Quia dolore quae, rerum amet consequuntur aut suscipit at 
          temporibus. Molestiae, voluptatum?"
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

      <SliderWrapper
        arrowPositionFromTop={isMobile ? "103%" : "160%"}
        isMobile={isMobile}
      >
        <SimpleSlider slidesPerRow={3} arrowFill="#151515">
          {books.map((book) => (
            <Flex
              key={book.id}
              direction="column"
              justify="space-between"
              align="center"
              gap="1rem"
              margin={isMobile ? "1rem 0 2rem" : ""}
            >
              <Text
                type="h3"
                text={book.title}
                color="#151515"
                weight={500}
                size="2.843rem"
                font="Whyte Inktrap"
                styles={{ lineHeight: "3.412rem", textAlign: "center" }}
              />
              <Text
                type="p"
                text={book.description}
                color="#5D5D5D"
                font="Open sans"
                weight={400}
                size="1.6rem"
                styles={{ lineHeight: "2.179rem", textAlign: "center" }}
              />
            </Flex>
          ))}
        </SimpleSlider>
      </SliderWrapper>
    </Wrapper>
  );
};

export default MyBooks;
