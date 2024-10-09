"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "@/components/atoms/image";
import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

// Data for the cards
const cardData: Card[] = [
  {
    id: 1,
    image: "/assets/image/imisi.jpeg",
    title: "Card 1 Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vero alias! Quas, aliquid quis consectetur voluptatibus dolorem quasi vitae quia.",
    description2: "lollohfbbzbbafbkbfbjbobfbjbf fajbljvbfjlbfljafv jvfbjvjnklnflnlknlnfknlkv jvbjjbfzbjblfbjjlbjfljbjbfljbf bjfbjlbjbjbzjbljbzljfbjlbvjfbvjbfzjzbljzf bfjbvjzfbzjbjbvjbzfjblzjfbljbljzfjbjlbljbjlbjblf bfjvjzbljbvjlbbvjflbjfjlbljvblbvjbvljblzfbljbfjlbzjfblfjlbzfj jbvjfbbzjlvbljbz jvfbvj jznbfjbvzlfzjbfjzjfbzbljbzrnlfz.fvfnlbnlnflznnjknzjnzfnjnlnz fbfjbfjzkjbjfbfhvzfjbkbzjfkjzfkjbzjbfkbczkf "
  },
  {
    id: 2,
    image: "/assets/image/imisi.jpeg",
    title: "Card 2 Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vero alias! Quas, aliquid quis consectetur voluptatibus dolorem quasi vitae quia.",
    description2: "lollohfbbzbbafbkbfbjbobfbjbf fajbljvbfjlbfljafv jvfbjvjnklnflnlknlnfknlkv jvbjjbfzbjblfbjjlbjfljbjbfljbf bjfbjlbjbjbzjbljbzljfbjlbvjfbvjbfzjzbljzf bfjbvjzfbzjbjbvjbzfjblzjfbljbljzfjbjlbljbjlbjblf bfjvjzbljbvjlbbvjflbjfjlbljvblbvjbvljblzfbljbfjlbzjfblfjlbzfj jbvjfbbzjlvbljbz jvfbvj jznbfjbvzlfzjbfjzjfbzbljbzrnlfz.fvfnlbnlnflznnjknzjnzfnjnlnz fbfjbfjzkjbjfbfhvzfjbkbzjfkjzfkjbzjbfkbczkf "
  },
  {
    id: 3,
    image: "/assets/image/imisi.jpeg",
    title: "Card 3 Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vero alias! Quas, aliquid quis consectetur voluptatibus dolorem quasi vitae quia.",
    description2: "lollohfbbzbbafbkbfbjbobfbjbf fajbljvbfjlbfljafv jvfbjvjnklnflnlknlnfknlkv jvbjjbfzbjblfbjjlbjfljbjbfljbf bjfbjlbjbjbzjbljbzljfbjlbvjfbvjbfzjzbljzf bfjbvjzfbzjbjbvjbzfjblzjfbljbljzfjbjlbljbjlbjblf bfjvjzbljbvjlbbvjflbjfjlbljvblbvjbvljblzfbljbfjlbzjfblfjlbzfj jbvjfbbzjlvbljbz jvfbvj jznbfjbvzlfzjbfjzjfbzbljbzrnlfz.fvfnlbnlnflznnjknzjnzfnjnlnz fbfjbfjzkjbjfbfhvzfjbkbzjfkjzfkjbzjbfkbczkf "
  },
  // Add more cards as needed
];

// Styled Carousel Container
const CarouselContainer = styled.div`
  width: 100%;
  margin: 10rem auto;
  padding: 2rem 0;
  // background: #154c79;
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
  // box-shadow: rgb(66 56 56 / 40%) 0px 0px 10px 3px;
  // transition: transform 0.2s ease;
  cursor: pointer;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 350px;
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #edfff7;
`;

// Card Description
const CardDescription = styled.p`
  font-size: 1rem;
  color: #17f7de;
`;

// MUI Modal Custom Style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  maxHeight: "90vh",
  overflowY: "auto",
};



interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
  description2: string;
}

export const CarouselWithModal = () => {
  const { isMobile } = useScreenResolution();
  // State to handle modal open/close and selected card content
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  // Handle open modal
  const handleOpen = (card: Card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  // Handle close modal
  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  // Settings for the Slick Carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Scroll every 2 seconds
    pauseOnHover: true, // Pause scrolling on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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
                <Card onClick={() => handleOpen(card)}>
                  <CardImage src={card.image} alt={card.title} />
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </Card>
              </CardWrapper>
            ))}
          </Slider>
        </SectionLayout>
      </CarouselContainer>

      {/* Modal to show the card content when clicked */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
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

          {/* Modal Content */}
          {selectedCard && (
            <>
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                styles={{ marginBottom: "1rem", height: "auto", maxHeight: "250px", objectFit: "cover", borderRadius: "5px"  }}
              />
              <Typography variant="h4" component="h2" gutterBottom>
                {selectedCard.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedCard.description2}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};
