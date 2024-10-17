"use client";

import SectionLayout from "./sectionLayout";
import Flex from "./flex";
import Text from "./text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import { BoxProps, styled } from "@mui/material";
import Image from "next/image";
import bilal from "../../../public/assets/image/testimonials/bilal.png";
import fad from "../../../public/assets/image/testimonials/fad.png";
import aug from "../../../public/assets/image/testimonials/aug.png";
import { SimpleSlider } from "./carousel";

interface TestimonialsProps {
  mobileHeight?: string; // If you plan to use this, implement it in styles
}

export function Testimonials({ mobileHeight }: TestimonialsProps) {
  const { isMobile } = useScreenResolution();
  
  const testimonials = [
    {
      id: 2,
      name: "Bilal Alaka Yusuf",
      position: "Bilal Alaka Yusuf",
      description:
        "Thank you very much for my internship and internship certificate. So I am highly recommending proU to anyone looking forward to productivity and achieving their goals.",
      avatar: bilal,
    },
    {
      id: 1,
      name: "Fadlullah Abdusalaam",
      position: "Student at PROU Academy",
      description:
        "Thanks to proU for opening my eyes to the best internship opportunities. ProU 100% confirmed. Don’t wait till tomorrow, join TODAY!",
      avatar: fad,
    },
    {
      id: 3,
      name: "Augustine",
      position: "Student at ProU Academy",
      description:
        "I have gained valuable knowledge and skills that have helped me in my personal and professional life. I highly recommend ProU to anyone looking to further their education or develop new skills.",
      avatar: aug,
    },
  ];

  return (
    <TestimonialsWrapper mobileHeight={mobileHeight}>
      <SliderWrapper
        isMobile={isMobile}
        arrowPositionFromTop={isMobile ? "110%" : "130%"} // Use the prop value here
      >
        <SectionLayout>
          <Flex direction="column" gap="1rem">
            <Text
              type="h1"
              text="Testimonials"
              weight={700}
              size={isMobile ? "3.2rem" : "5.052rem"}
              styles={{
                lineHeight: isMobile ? "2.56rem" : "6.06rem",
                fontFamily: "Whyte Inktrap",
                marginBottom: "0px",
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
          <SimpleSlider slidesPerRow={isMobile ? 1 : 2} arrowFill="#151515">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} isMobile={isMobile}>
                <Flex align="center" gap="1.2rem">
                  <Flex
                    gap="1.5rem"
                    justify="space-between"
                    align="flex-start"
                    direction={isMobile ? "initial" : "row"}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={isMobile ? 48 : 84}
                    />
                    <Flex
                      direction="column"
                      gap={isMobile ? "2rem" : "1.5rem"}
                      justify="space-between"
                    >
                      <p
                        style={{
                          fontSize: isMobile ? "1.4rem" : "1.7rem",
                          width: isMobile ? "100%" : "44.6rem",
                          margin: '0px',
                          color: "#5d5d5d",
                        }}
                      >
                        {testimonial.description}
                      </p>
                      <Flex direction="column" gap=".1rem">
                        <Text
                          type="h3"
                          text={testimonial.name}
                          weight={800}
                          size={isMobile ? 16 : 18}
                          font="Whyte Inktrap"
                          styles={{ margin: "10px 0 0" }}
                        />
                        <p
                          style={{
                            fontSize: isMobile ? "1.4rem" : "1.5rem",
                            fontWeight: 500,
                            color: "#154c79",
                          }}
                        >
                          {testimonial.position}
                        </p>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </TestimonialCard>
            ))}
          </SimpleSlider>
        </SectionLayout>
      </SliderWrapper>
    </TestimonialsWrapper>
  );
}

const TestimonialsWrapper = styled("div")(
  ({ mobileHeight }: { mobileHeight?: string }) => ({
    padding: "6rem 0rem 0",
    height: mobileHeight || "58rem", // Utilize mobileHeight here if needed

    "@media (max-width: 900px)": {
      height: "52rem",
      padding: "6rem 0rem",
    },

    "@media (max-width: 360px)": {
      height: "60rem",
    },
    "@media (max-width: 340px)": {
      height: "67rem",
    },
  })
);

export const SliderWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile" && prop !== "arrowPositionFromTop",
})<BoxProps & { isMobile: boolean; arrowPositionFromTop: string }>(
  ({ isMobile, arrowPositionFromTop }) => ({
    position: "relative",
    "& .slick-slide": {
      "& div": {
        display: "flex",
        gap: "4rem",
        height: "100%",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          gap: "1rem",
        },
      },
    },
    ".slick-prev": {
      left: isMobile ? "28%!important" : "42% !important",
      top: arrowPositionFromTop, // Use arrowPositionFromTop here
      cursor: "pointer",
    },
    ".slick-next": {
      right: isMobile ? "33%!important" : "46% !important",
      top: arrowPositionFromTop, // Use arrowPositionFromTop here
      cursor: "pointer",
    },
  })
);


const TestimonialCard = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<BoxProps & { isMobile: boolean }>(({}) => ({
  cursor: "move",
  background: "transparent",
  padding: "3rem",
  borderRadius: "8px",
  border: "1px solid #505050",
  marginTop: "2rem",
  height: "228px!important",

  "@media (max-width: 900px)": {
    height: "auto!important",
    padding: "1.5rem",
  },
}));

export default Testimonials ;
;
