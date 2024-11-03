"use client";

import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Image from "@/components/atoms/image";
import Link from "@/components/atoms/link";
import React, { useState, useRef } from "react";
import Text from "@/components/atoms/text";
import styled from "styled-components";
import HomeImgM from "../../../../../public/assets/image/logo/logoM.png";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
// New
// import SwiperClass from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Modal, Box, Typography, Button } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md"; // Importing icons
import { IoClose } from "react-icons/io5";

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

const pages = [
  {
    content:
      "That they may be blameless children in this perverse world' has been the longing of the One who always wants the children to come to Him. Blossom is symbolic of a phase of full maturity such as when a child has become a grown-up. Blameless connotes a state without stain or spot. For a long time, we have comfortably thought blameless children refers to spiritually or morally pure ones only. No. There's more- biologically, emotionally, mentally, and the list overflows. But how can blameless buds morph into blameless blossoms? Bud is a metaphor for a little child who is still developing and has not come to full maturity.",
  },
  {
    content:
      "Through the panacea of the pen and inspiration of the ink, children are built and rebuilt through adults who will learn and unlearn. It presents us with the awareness and aid on how, as adults, we should numb ourselves to some norms that have become acceptable by society in the area of raisinlg children. Many of these, though with good intentions, have produced unwholesome blossoms who may fit into the society's standard but are broken elsewhere, overtly or covertly. At other times, they end up with anti-social behaviours or debilitating physical, mental, or emotional crisis and the same society that built them blames and denounces them",
  },
  {
    content:
      "Imagine a surgeon damages a vital blood vessel in a bid to salvage a hemorrhage in a less vital vessel. We ought not to violate them in a bid to care for or train them. When the mission is good but the method is wrong, the result will not only be barren but our children may still be on the barred list despite our efforts. They can still be affected by diseases and other ill fates that should not assail them.To bridge such a brackish outcome, this blog presents a curative approach to parenting by focusing on how we, as adults, need to work on ourselves as we raise children. It harnesses an approach that begins with us, healing us of our ignorance, deceptions, hurts, pains, and trauma that we failed to reconcile with until we were grown-ups or those we are going through currently; the wholesome life we must be restored into and the renewed mind we must walk daily in diverse areas. Until we return to blameless buds ourselves, we cannot raise blameless blossoms. 'Except we become converted into little children (pure, innocent, whole), we cannot raise the kingdom-kind of children.",
  },
];

export const HomeComponent = () => {
  const { isMobile } = useScreenResolution();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const swiperRef = React.useRef<Swiper | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <HomePageWrapper>
      <SectionLayout height="100%" data-aos={isMobile ? "" : "fade-up"}>
        <Flex
          justify="space-between"
          height="100%"
          align="center"
          gap={isMobile ? "5rem" : "5rem"}
          direction={isMobile ? "column" : "row"}
          styles={{
            position: "relative",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <HeroImageSection>
            <Image src={HomeImgM} alt="" height={700} width={700} />
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
              text="Blossom is symbolic of a phase of full maturity such as when a child has become a grown-up."
              color="#17F7DE"
              font="Open Sans"
              size={isMobile ? "1.8rem" : "2rem"}
              weight={400}
              styles={{
                lineHeight: isMobile ? "2.732rem" : "2.507rem",
                margin: "0",
              }}
              width={isMobile ? "100%" : "64.8rem"}
            />
            <Text
              type="p"
              text="Blameless connotes a state without stain or spot. For a long time, we have comfortably thought blameless children refers to spiritually or morally pure ones only. No. There's more- biologically, emotionally, mentally, and the list overflows."
              color="#17F7DE"
              font="Open Sans"
              size={isMobile ? "1.8rem" : "2rem"}
              weight={400}
              styles={{
                lineHeight: isMobile ? "2.732rem" : "2.507rem",
                margin: "0px",
              }}
              width={isMobile ? "100%" : "64.8rem"}
            />
            <Link href="" onClick={handleOpenModal}>
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

      {/* Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalWrapper>
          <Button
            onClick={handleCloseModal}
            disableRipple
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <IoClose size={20} />
          </Button>
          <Typography variant="h3" align="center" gutterBottom>
            Blameless Blossoms
          </Typography>
          <Swiper
            // ref={swiperRef}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // navigation
            style={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {pages.map((page, index) => (
              <SwiperSlide key={index}>
                <ContentWrapper>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "1.5rem",
                      color: "#222",
                      fontFamily: "Whyte Inktrap",
                      fontWeight: "200",
                    }}
                  >
                    {page.content}
                  </Typography>
                </ContentWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <NavigationButton
              onClick={() => swiperRef.current?.slidePrev()}
              disableRipple
            >
              <MdKeyboardDoubleArrowLeft
                size={40}
                style={{
                  border: "1px solid #19013b",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </NavigationButton>
            <NavigationButton
              onClick={() => swiperRef.current?.slideNext()}
              disableRipple
            >
              <MdKeyboardDoubleArrowRight
                size={40}
                style={{
                  border: "1px solid #19013b",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </NavigationButton>
          </div>
        </ModalWrapper>
      </Modal>
    </HomePageWrapper>
  );
};

// const FlipbookWrapper = styled.div`
//   margin-top: 15vh;
//   margin-bottom: 5vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
// `;

// const FlipbookTitle = styled.h3`
//   color: #ffa200;
//   text-align: center;
//   font-size: 2.5vw;
//   font-family: "Poppins", sans-serif;
//   font-weight: 900;
//   line-height: 75px;
//   text-shadow: 1px 3px 0px #373737;

//   @media (max-width: 768px) {
//     font-size: 5vw;
//   }
// `;

const ContentWrapper = styled.div`
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  overflow-y: auto;
  max-height: 300px;
`;

const ModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationButton = styled(Button)`
  border: 1px solid #ffa200;
  border-radius: 50%;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
