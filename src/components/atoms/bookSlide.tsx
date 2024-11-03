// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import { Modal, Box, Typography, Button } from "@mui/material";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import styled from "styled-components";
// import Text from "./text";
// import Link from "./link";

// // Page content for the book
// const pages = [
//   { content: "That they may be blameless children in this perverse world... [continued text]" },
//   { content: "Through the panacea of the pen and inspiration of the ink... [continued text]" },
//   { content: "Imagine a surgeon damages a vital blood vessel... [continued text]" },
// ];

// // Styled components
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


// const ContentWrapper = styled.div`
//   padding: 20px;
//   font-size: 1rem;
//   line-height: 1.5;
//   overflow-y: auto;
//   max-height: 300px;
// `;

// const ModalWrapper = styled(Box)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 90%;
//   max-width: 500px;
//   background-color: #fff;
//   padding: 1.5rem;
//   border-radius: 10px;
//   outline: none;
//   overflow: hidden;
// `;

// // Main component
// export const BookFlipComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   return (
//     <FlipbookWrapper>
//       <FlipbookTitle>Blameless Blossom</FlipbookTitle>
//       <Link href="" onClick={handleOpenModal}>
//       <Text type="p" text="here"  styles={{}} />
//       </Link>

//       {/* Modal with Swiper */}
//       <Modal open={isModalOpen} onClose={handleCloseModal}>
//         <ModalWrapper>
//           <Button onClick={handleCloseModal} style={{ position: "absolute", top: 10, right: 10 }}>X</Button>
//           <Typography variant="h5" align="center" gutterBottom>Blameless Blossom Book</Typography>
//           <Swiper
//             modules={[Pagination, Navigation]}
//             pagination={{ clickable: true }}
//             navigation
//             style={{ width: "100%", height: "400px" }}
//           >
//             {pages.map((page, index) => (
//               <SwiperSlide key={index}>
//                 <ContentWrapper>
//                   <Typography variant="body1">{page.content}</Typography>
//                 </ContentWrapper>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </ModalWrapper>
//       </Modal>
//     </FlipbookWrapper>
//   );
// };

// export default BookFlipComponent;



"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Modal, Box, Typography, Button } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"; // Importing icons
import Text from "./text";
import Link from "./link";
import { IoClose } from "react-icons/io5";


// Page content for the book
const pages = [
  { content: "That they may be blameless children in this perverse world' has been the longing of the One who always wants the children to come to Him. Blossom is symbolic of a phase of full maturity such as when a child has become a grown-up. Blameless connotes a state without stain or spot. For a long time, we have comfortably thought blameless children refers to spiritually or morally pure ones only. No. There's more- biologically, emotionally, mentally, and the list overflows. But how can blameless buds morph into blameless blossoms? Bud is a metaphor for a little child who is still developing and has not come to full maturity." },
  { content: "Through the panacea of the pen and inspiration of the ink, children are built and rebuilt through adults who will learn and unlearn. It presents us with the awareness and aid on how, as adults, we should numb ourselves to some norms that have become acceptable by society in the area of raisinlg children. Many of these, though with good intentions, have produced unwholesome blossoms who may fit into the society's standard but are broken elsewhere, overtly or covertly. At other times, they end up with anti-social behaviours or debilitating physical, mental, or emotional crisis and the same society that built them blames and denounces them" },
  { content: "Imagine a surgeon damages a vital blood vessel in a bid to salvage a hemorrhage in a less vital vessel. We ought not to violate them in a bid to care for or train them. When the mission is good but the method is wrong, the result will not only be barren but our children may still be on the barred list despite our efforts. They can still be affected by diseases and other ill fates that should not assail them.To bridge such a brackish outcome, this blog presents a curative approach to parenting by focusing on how we, as adults, need to work on ourselves as we raise children. It harnesses an approach that begins with us, healing us of our ignorance, deceptions, hurts, pains, and trauma that we failed to reconcile with until we were grown-ups or those we are going through currently; the wholesome life we must be restored into and the renewed mind we must walk daily in diverse areas. Until we return to blameless buds ourselves, we cannot raise blameless blossoms. 'Except we become converted into little children (pure, innocent, whole), we cannot raise the kingdom-kind of children." },
];

// Styled components
const FlipbookWrapper = styled.div`
  margin-top: 15vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FlipbookTitle = styled.h3`
  color: #ffa200;
  text-align: center;
  font-size: 2.5vw;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  line-height: 75px;
  text-shadow: 1px 3px 0px #373737;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

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

// Main component
export const BookFlipComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = React.useRef<Swiper | null>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <FlipbookWrapper>
      <FlipbookTitle>Blameless Blossom</FlipbookTitle>
      <Link href="" onClick={handleOpenModal}>
        <Text type="p" text="here" styles={{}} />
      </Link>

      {/* Modal with Swiper */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalWrapper>
          <Button onClick={handleCloseModal} disableRipple style={{ position: "absolute", top: 10, right: 10 }}>
          <IoClose size={20}  />
          </Button>
          <Typography variant="h3" align="center" gutterBottom>Blameless Blossoms</Typography>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            // navigation
            style={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            {pages.map((page, index) => (
              <SwiperSlide key={index}>
                <ContentWrapper>
                  <Typography variant="body2" style={{fontSize: "1.5rem", color: "#222", fontFamily: "Whyte Inktrap", fontWeight: "200",}}>{page.content}</Typography>
                </ContentWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <NavigationButton onClick={() => swiperRef.current.swiper.slidePrev()} disableRipple>
              <MdKeyboardDoubleArrowLeft size={40} style={{border: "1px solid #19013b", borderRadius: "50%", padding: "10px",}} />
            </NavigationButton>
            <NavigationButton onClick={() => swiperRef.current.swiper.slideNext()} disableRipple>
              <MdKeyboardDoubleArrowRight size={40} style={{border: "1px solid #19013b", borderRadius: "50%", padding: "10px",}} />
            </NavigationButton>
          </div>
        </ModalWrapper>
      </Modal>
    </FlipbookWrapper>
  );
};

export default BookFlipComponent;
