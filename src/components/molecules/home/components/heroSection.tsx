"use client";

import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Image from "@/components/atoms/image";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import HTMLFlipBook from 'react-pageflip';
import CoverImg from "/public/assets/image/logo/logoM.png";
import styled from "styled-components";
import HomeImgM from "../../../../../public/assets/image/logo/logoM.png";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookRef = useRef<typeof HTMLFlipBook>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

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
            <Link href="" onClick={() => setIsModalOpen(true)}>
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
      {isModalOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <SectionLayout onClick={(e) => e.stopPropagation()} style={{background: "#fff", border: "2px solid crimson", borderRadius: "1rem", width: "550px", height: "600px", position: "relative", padding: "1rem",}}>
            <CloseButton onClick={() => setIsModalOpen(false)}>X</CloseButton>
            <BookFlip ref={bookRef} />
          </SectionLayout>
        </ModalOverlay>
      )}
    </HomePageWrapper>
  );
};

const BookFlip = forwardRef((props, ref) => {
  const bookRef = useRef(null);

  useImperativeHandle(ref, () => bookRef.current);
  const pages = [
    { content: "Blossom is symbolic of a phase of full maturity, such as when a child has become a grown-up. Blameless connotes a state without stain or spot. For a long time, we have comfortably thought blameless children refers to morally pure ones only. No. There's more- biologically, emotionally, mentally, and the list overflows. But how can blameless buds morph into blameless blossoms? Bud is a metaphor for a little child who is still developing and has not come to full maturity" },
    { content: "Blameless Blossoms is a blog that uses a memoir style of creative nonfiction to weave stories around the intersection between childhood and adulting. It seeks to shed light on and supply solutions to the multifaceted challenges of children using a system-level thinking approach that challenges adults to understand children in their quest to help them have abundant life." },
    { content: "Through the panacea of the pen and inspiration of the ink, children are built and rebuilt through adults who will learn and unlearn. It presents us with the awareness and aid on how, as adults, we should numb ourselves to some norms that have become acceptable by society in the area of raisinlg children. Many of these, though with good intentions, have produced unwholesome blossoms who may fit into the society's standard but are broken elsewhere, overtly or covertly. At other times, they end up with anti-social behaviours or debilitating physical, mental, or emotional crisis and the same society that built them blames and denounces them" },
    { content: "Imagine a surgeon damages a vital blood vessel in a bid to salvage a hemorrhage in a less vital vessel. We ought not to violate them in a bid to care for or train them. When the mission is good but the method is wrong, the result will not only be barren but our children may still be on the barred list despite our efforts. They can still be affected by diseases and other ill fates that should not assail them.To bridge such a brackish outcome, this blog presents a curative approach to parenting by focusing on how we, as adults, need to work on ourselves as we raise children. It harnesses an approach that begins with us, healing us of our ignorance, deceptions, hurts, pains, and trauma that we failed to reconcile with until we were grown-ups or those we are going through currently; the wholesome life we must be restored into and the renewed mind we must walk daily in diverse areas. Until we return to blameless buds ourselves, we cannot raise blameless blossoms. 'Except we become converted into little children (pure, innocent, whole), we cannot raise the kingdom-kind of children." },

  ];

  return (
    <HTMLFlipBook
    ref={bookRef}
    width={500}
    height={300}
    startPage={0} // Example property, change as needed
    size="stretch"
    minWidth={315}
    maxWidth={1000}
    minHeight={400}
    maxHeight={1536}
    drawShadow={true}
    flippingTime={1000}
    usePortrait={true}
    showCover={true}
    mobileScrollSupport={true}
    startZIndex={0}
    autoSize={true}
    maxShadowOpacity={0.5}
    style={{
      zIndex: 10,
      backgroundColor: 'transparent',
    }}
    {...props}
    >
      {/* Cover Page with Image */}
      <Flex justify="center" align="center"  styles={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src={CoverImg} alt="Cover Page" height={450} width={450} styles={{objectFit: "initial"}}/>
        <Text type="h1" text="BLAMELESS BLOSSOMS" color="#000" textAlign="center" weight={700} />
      </Flex>

      {/* Inner Book Pages */}
      {pages.slice(1).map((page, index) => (
        <div key={index} style={{ padding: "20px", fontSize: "24px", textAlign: "center" }}>
          <Text type="p" text={page.content} color="#222"/>
        </div>
      ))}
    </HTMLFlipBook>
  );
});

BookFlip.displayName = "BookFlip";




const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff6347;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1001; /* Ensure close button appears above the book */
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Modal background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


