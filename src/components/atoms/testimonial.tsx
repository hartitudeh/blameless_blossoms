"use client";

import SectionLayout from "./sectionLayout";
import Flex from "./flex";
import Text from "./text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import { BoxProps, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import bilal from "../../../public/assets/image/testimonials/bilal.png";
import fad from "../../../public/assets/image/testimonials/fad.png";
import aug from "../../../public/assets/image/testimonials/aug.png";
import { SimpleSlider } from "./carousel";
interface indexProps {
  mobileHeight?: string;
  aos?: string;
}

export function Testimonials({ mobileHeight, aos }: indexProps) {
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
        "I have gained valuable knowledge and skills that have helped me in my personal and professional life. I highly recommend ProU to anyone looking to further their education or develop new skills. ",
      avatar: aug,
    },
  ];

  return (
    <TestimonialsWrapper mobileHeight={mobileHeight} data-aos="fade-up">
      <SliderWrapper
        isMobile={isMobile}
        arrowPositionFromTop={isMobile && "123%"}
      >
        <SectionLayout>
          <Flex direction="column" gap="1rem">
            <Text
              type="h1"
              text="Our Testimonial"
              weight={700}
              size={isMobile ? "3.2rem" : "5.052rem"}
              styles={{
                lineHeight: isMobile ? "2.56rem" : "6.06rem",
                fontFamily: "Whyte Inktrap",
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
          {/* {!isMobile ? ( */}
          <SimpleSlider slidesPerRow={isMobile ? 1 : 2} arrowFill="#151515">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                isMobile={isMobile}
                data-index={testimonial.id}
                onDrag={(e) => console.log("esdfsdf: ", e)}
              >
                <Flex align="center" gap="1.2rem">
                  <Flex
                    gap="1.5rem"
                    justify="space-between"
                    align="flex-start"
                    direction={isMobile ? "initial" : "row"}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt="testimonial"
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
                        />
                        {/* <Text
                          type="h3"
                          text={testimonial.position}
                          size={15}
                          weight={500}
                        /> */}
                        <p
                          style={{
                            fontSize: isMobile ? "1.4rem" : "1.5rem",
                            fontWeight: 500,
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
          {/* // ) : (
          //   <MobileCarousel testimonials={testimonials} isMobile={isMobile} />
          // )} */}
        </SectionLayout>
      </SliderWrapper>
    </TestimonialsWrapper>
  );
}

const TestimonialsWrapper = styled("div")(
  ({ mobileHeight }: { mobileHeight?: string }) => ({
    background: "#FEFCE8",
    padding: "6rem 0rem 0",
    height: "58rem",

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

const arrowStyles = (isMobile: boolean, arrowPositionFromTop?: string) => {
  return {
    top: arrowPositionFromTop
      ? arrowPositionFromTop
      : isMobile
      ? "110%!important"
      : "130% !important",
    cursor: "pointer",
    border: "1px solid #505050",
    borderRadius: "50%",
    height: isMobile ? "5.5rem" : "6rem",
    width: isMobile ? "5.5rem" : "6rem",
    display: "flex!important",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100000,
    "&>svg": {
      width: "10px",
    },

    "&:before": {
      width: 0,
      content: "''",
    },

    "&.slick-disabled": {
      opacity: 0.3,
      cursor: "not-allowed",
    },

    "@media (max-width: 320px)": {
      top: "120%",
    },
  };
};

export const SliderWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<BoxProps & { isMobile: boolean; arrowPositionFromTop?: string | undefined }>(
  ({ isMobile, arrowPositionFromTop }) => ({
    position: "relative",
    "& .slick-slide": {
      "& div": {
        display: "flex",
        gap: "4rem",
        height: "100%",
        "&>div": {
          "@media (max-width: 900px)": {
            width: "100%!important",
            gap: "1rem",
          },
        },

        "@media (max-width: 900px)": {
          flexDirection: "column",
          gap: "1rem",
        },
      },
      // marginRight: "2rem",
    },
    ".slick-prev": {
      left: isMobile ? "28%!important" : "42% !important",
      ...arrowStyles(isMobile, arrowPositionFromTop),
    },
    ".slick-next": {
      right: isMobile ? "33%!important" : "46% !important",
      ...arrowStyles(isMobile, arrowPositionFromTop),

      "@media (max-width: 340px)": {
        right: "27%!important",
      },
    },

    // ".slick-slide.slick-active.slick-center.slick-current": {
    //   width: isMobile ? "350px!important" : "100%",
    // },
  })
) as any;

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
})) as React.FC<BoxProps & { isMobile: boolean }>;
export default Testimonials;
