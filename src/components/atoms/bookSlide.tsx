"use client";

import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import Image from "./image";
import Flex from "./flex";


// Styled Components for Modal and Close Button
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

const BookContainer = styled.div`
  position: relative;
  width: fit-content;
  height: 600px;
  border: 2px solid #ef9f00; /* Border around the book */
  border-radius: 10px;
  background-color: white;
  // overflow: hidden;
  padding: 2rem;
`;

// BookFlip Component with Ref for Navigation
const BookFlip = React.forwardRef<typeof HTMLFlipBook, unknown>((_, ref) => {
  const pages = [
    { content: "Blossom is symbolic of a phase of full maturity, such as when a child has become a grown-up. Blameless connotes a state without stain or spot. For a long time, we have comfortably thought blameless children refers to morally pure ones only. No. There's more- biologically, emotionally, mentally, and the list overflows. But how can blameless buds morph into blameless blossoms? Bud is a metaphor for a little child who is still developing and has not come to full maturity" },
    { content: "Blameless Blossoms is a blog that uses a memoir style of creative nonfiction to weave stories around the intersection between childhood and adulting. It seeks to shed light on and supply solutions to the multifaceted challenges of children using a system-level thinking approach that challenges adults to understand children in their quest to help them have abundant life." },
    { content: "Through the panacea of the pen and inspiration of the ink, children are built and rebuilt through adults who will learn and unlearn. It presents us with the awareness and aid on how, as adults, we should numb ourselves to some norms that have become acceptable by society in the area of raisinlg children. Many of these, though with good intentions, have produced unwholesome blossoms who may fit into the society's standard but are broken elsewhere, overtly or covertly. At other times, they end up with anti-social behaviours or debilitating physical, mental, or emotional crisis and the same society that built them blames and denounces them" },
    { content: "Imagine a surgeon damages a vital blood vessel in a bid to salvage a hemorrhage in a less vital vessel. We ought not to violate them in a bid to care for or train them. When the mission is good but the method is wrong, the result will not only be barren but our children may still be on the barred list despite our efforts. They can still be affected by diseases and other ill fates that should not assail them.To bridge such a brackish outcome, this blog presents a curative approach to parenting by focusing on how we, as adults, need to work on ourselves as we raise children. It harnesses an approach that begins with us, healing us of our ignorance, deceptions, hurts, pains, and trauma that we failed to reconcile with until we were grown-ups or those we are going through currently; the wholesome life we must be restored into and the renewed mind we must walk daily in diverse areas. Until we return to blameless buds ourselves, we cannot raise blameless blossoms. 'Except we become converted into little children (pure, innocent, whole), we cannot raise the kingdom-kind of children." },

  ];

  return (
    <HTMLFlipBook
      width={500}
      height={600}
      ref={ref}
      showCover={true}
      mobileScrollSupport={true}
      style={{
        border: "none",
        boxShadow: "none",
      }}
    >
      {/* Cover Page with Image */}
      <Flex justify="center" align="center"  styles={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src={CoverImg} alt="Cover Page" height={450} width={450} styles={{objectFit: "cover"}}/>
      </Flex>

      {/* Inner Book Pages */}
      {pages.slice(1).map((page, index) => (
        <div key={index} style={{ padding: "20px", fontSize: "24px", textAlign: "center" }}>
          <p>{page.content}</p>
        </div>
      ))}
    </HTMLFlipBook>
  );
});

// Adding displayName to avoid ESLint warning
BookFlip.displayName = "BookFlip";

// Main Component with Modal Logic
const MainComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookRef = useRef<typeof HTMLFlipBook>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if the click is on the overlay, not inside the BookContainer
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#ef9f00', color: 'white', cursor: 'pointer' }}>
        Open Book
      </button>

      {isModalOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <BookContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>Close</CloseButton>
            <BookFlip ref={bookRef} />
          </BookContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default MainComponent;















//   const pages = [
//     { title: "Cover Page", content: "", coverImage: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoM.0bc0fdfa.png&w=1920&q=75" },
//     { title: "Introduction", content: "That they may be blameless children in this perverse world' has been the longing of the One who always wants the children to come to Him." },
    // { title: "Chapter 1", content: "Blossom is symbolic of a phase of full maturity, such as when a child has become a grown-up. Blameless connotes a state without stain or spot. For a long time, we have comfortably thought blameless children refers to morally pure ones only. No. There's more- biologically, emotionally, mentally, and the list overflows. But how can blameless buds morph into blameless blossoms? Bud is a metaphor for a little child who is still developing and has not come to full maturity" },
    // { title: "Chapter 2", content: "Blameless Blossoms is a blog that uses a memoir style of creative nonfiction to weave stories around the intersection between childhood and adulting. It seeks to shed light on and supply solutions to the multifaceted challenges of children using a system-level thinking approach that challenges adults to understand children in their quest to help them have abundant life." },
    // { title: "Chapter 3", content: "Through the panacea of the pen and inspiration of the ink, children are built and rebuilt through adults who will learn and unlearn. It presents us with the awareness and aid on how, as adults, we should numb ourselves to some norms that have become acceptable by society in the area of raisinlg children. Many of these, though with good intentions, have produced unwholesome blossoms who may fit into the society's standard but are broken elsewhere, overtly or covertly. At other times, they end up with anti-social behaviours or debilitating physical, mental, or emotional crisis and the same society that built them blames and denounces them" },
    // { title: "Conclusion", content: "Imagine a surgeon damages a vital blood vessel in a bid to salvage a hemorrhage in a less vital vessel. We ought not to violate them in a bid to care for or train them. When the mission is good but the method is wrong, the result will not only be barren but our children may still be on the barred list despite our efforts. They can still be affected by diseases and other ill fates that should not assail them.To bridge such a brackish outcome, this blog presents a curative approach to parenting by focusing on how we, as adults, need to work on ourselves as we raise children. It harnesses an approach that begins with us, healing us of our ignorance, deceptions, hurts, pains, and trauma that we failed to reconcile with until we were grown-ups or those we are going through currently; the wholesome life we must be restored into and the renewed mind we must walk daily in diverse areas. Until we return to blameless buds ourselves, we cannot raise blameless blossoms. 'Except we become converted into little children (pure, innocent, whole), we cannot raise the kingdom-kind of children." },
//   ];