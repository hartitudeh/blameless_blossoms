"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Modal, Box, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "@/components/atoms/image";
import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import SideConent from "../../blog/components/sideContent";
import { IoClose } from "react-icons/io5";

// Data for the cards
const cardData: Card[] = [
  {
    id: 1,
    image: "/assets/image/world.jpg",
    title: "Joy Of The World",
    url: "https://parousiamagazine.wordpress.com/2022/12/25/like-calves-released-from-the-stall-by-ayooluwa-e-adekoya-imisi-joy-to-the-world-issue-14-parousia/",
    description:
      "Before you arrived, we were charged With law-breaking Offenses for which we were imprisoned Behind the bars of guilt Wallowing in woes, swallowing reproach We were destined for destruction.",
    },
  {
    id: 2,
    image: "/assets/image/faith.jpg",
    title: "Faith On Every Corner",
    url: "https://issuu.com/craigruhl/docs/faith_on_every_corner_-_may_2022",
    description:
      "I urge, then, first of all, that petitions, prayers, intercession, and thanksgiving be made for all people for kings and all those in authority that we may live peaceful and quiet lives in all godliness and holiness.",
    },
  {
    id: 3,
    image: "/assets/image/comrade.jpg",
    title: "Comrade of Comfort",
    url: "https://selar.co/em5w?currency=RWF",
    description:
      "Comrade of Comfort, a poetry collection by Ayooluwa E. Adekoya Ìmísí, published by Nectar Publishers is a collection of inspirational poems that inspire devotion and comfort. Rich in literary ingredients yet simple and easy to understand, it promises to be a life-changing journey.",
    },
  // Add more cards as needed
];

// Styled Carousel Container
const CarouselContainer = styled.div`
  width: 100%;
  margin: 10rem auto;
  padding: 2rem 0;
  // background: #154c79;

  @media screen and (max-width: 900px) {
    margin: 2rem auto;
  }
`;

const CardWrapper = styled.div`
  padding: 0 1rem; /* This adds a horizontal gap between the cards */
  box-sizing: border-box; /* Ensures padding doesn't affect the overall width */
`;

// Styled Card
const Card = styled.div`
  background-color: #154c79;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 400px;

  @media (max-width: 900px) {
    height: 430px; 
  }
`;

// Card Image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

// Card Title
const CardTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0.8rem auto 0.5rem;
  color: #edfff7;
`;

// Card Description
const CardDescription = styled.p`
  font-size: 1.5rem;
  color: #17f7de;
`;



const ModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  height: 80vh;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

const Wrap = styled.div`
  width: 75%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
}

export const CarouselWithModal = () => {
  const { isMobile } = useScreenResolution();
  const [selectedUrl, setSelectedUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to handle modal open/close and selected card content
  // const [open, setOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleOpenModal = (url: string) => {
    setSelectedUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUrl("");
  };

  // Settings for the Slick Carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Carousel */}
      <CarouselContainer>
        <SectionLayout height="100%" data-aos="fade-up">
          <Flex gap="3rem" direction={isMobile ? "column" : "row"}>
            <Wrap>
              <Flex direction="column" gap="1rem" margin="0px 0px 4rem">
                <Text
                  type="h1"
                  text="My Books"
                  weight={700}
                  size={isMobile ? "3.2rem" : "5.052rem"}
                  styles={{
                    lineHeight: isMobile ? "2.56rem" : "6.06rem",
                    fontFamily: "Whyte Inktrap",
                    marginBottom: "0px",
                    // width: isMobile ? "35.8rem" : "53.7rem",
                  }}
                />
                <Text
                  type="p"
                  text="Our prowess in Educational And Career networking is unmatched; we ensure we don't perform below global educational standards. Here's what our satisfied clients have to say about signing up with us"
                  color="#5D5D5D"
                  weight={400}
                  font="Open sans"
                  size={isMobile ? "1.4rem" : "1.6rem"}
                  styles={{ lineHeight: isMobile ? "1.907rem" : "2.179rem" }}
                  width={isMobile ? "100%" : "80%"}
                />
              </Flex>
              <Slider {...settings}>
                {cardData.map((card) => (
                  <CardWrapper key={card.id}>
                    <Card onClick={() => handleOpenModal(card.url)}>
                      <CardImage src={card.image} alt={card.title} />
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </Card>
                  </CardWrapper>
                ))}
              </Slider>
            </Wrap>
            <SideConent />
          </Flex>
        </SectionLayout>
      </CarouselContainer>

      {/* <Modal open={open} onClose={handleClose}>
        <StyledModalBox>
          <Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedCard && (
              <>
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  styles={{
                    marginBottom: "1rem",
                    height: "auto",
                    maxHeight: "250px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    color: "#154c79",
                    fontWeight: "600",
                    fontFamily: "Whyte Inktrap",
                    fontSize: "2.5rem",
                  }}
                >
                  {selectedCard.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "#222", fontSize: "1.5rem" }}
                >
                  {selectedCard.description2}
                </Typography>
              </>
            )}
          </Box>
        </StyledModalBox>
      </Modal> */}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalWrapper>
        <Box style={{ position: "absolute", top: 10, right: 10 }}>
            <Button onClick={handleCloseModal}>
            <IoClose size={30} color="crimson" />
            </Button>
          </Box>
          <iframe
            src={selectedUrl}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Article Viewer"
          />
        </ModalWrapper>
      </Modal>
    </>
  );
};
