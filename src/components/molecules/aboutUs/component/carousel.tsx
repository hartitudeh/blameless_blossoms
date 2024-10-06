import { BoxProps, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import arrowLeft from "../../../../../public/assets/image/arrowLeft.svg";
import arrowRight from "../../../../../public/assets/image/arrowRight.svg";
import Flex from "@/components/atoms/flex";
import SectionLayout from "@/components/atoms/sectionLayout";
interface CarouselsProps {
  isMobile: boolean;
  testimonials: testimonial[];
}

interface testimonial {
  id: number;
  name: string;
  position: string;
  description: string;
  avatar: StaticImageData;
}
const settings = (
  isMobile: boolean,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
  return {
    slidesToShow: 2,
    // slidesToScroll: 2,
    slidesToRow: 1,
    initialSlide: 0,
    speed: 1000,
    slidesPerRow: 1,
    adaptiveHeight: true,
    accessibility: true,
    infinite: false,
    // centerMode: true,
    // centerPadding: "20%",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: (
      <div>
        <Image src={arrowLeft} alt="previous" />
      </div>
    ),
    nextArrow: (
      <div>
        <Image src={arrowRight} alt="next" />
      </div>
    ),
  };
};
export const MobileCarousel: React.FC<CarouselsProps> = ({
  testimonials,
  isMobile,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SliderWrapper
      style={{
        margin: isMobile ? "2rem  0 0" : "10rem 0",

        paddingBottom: "10rem",
      }}
      isMobile={isMobile}
      data-aos="fade-up"
    >
      <SectionLayout>
        <Slider {...settings(isMobile, setCurrentSlide)}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              isMobile={isMobile}
              data-index={testimonial.id}
            >
              <Flex align="center" gap="1.2rem">
                <Flex gap="1.5rem" justify="space-between" align="flex-start">
                  <Image
                    src={testimonial.avatar}
                    alt="testimonial"
                    width={60}
                  />

                  <Flex direction="column" gap="1.5rem" justify="space-between">
                    <p style={{ fontSize: isMobile ? "1.6rem" : "2rem", width: isMobile ? "100%" : "44.6rem" }}>
                      {testimonial.description}
                    </p>
                    <Flex direction="column" gap=".1rem">
                      <h3 style={{ fontSize: isMobile ? "1.8rem" : "2rem" }}>
                        {testimonial.name}
                      </h3>
                      <h5>{testimonial.position}</h5>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </TestimonialCard>
          ))}
        </Slider>
      </SectionLayout>
    </SliderWrapper>
  );
};

const arrowStyles = (isMobile: boolean) => {
  return {
    top: isMobile ? "115%!important" : "180% !important",
    cursor: "pointer",
    border: "1px solid #505050",
    borderRadius: "50%",
    // padding: "1rem",
    height: isMobile ? "5rem" : "6rem",
    width: isMobile ? "5rem" : "6rem",
    display: "flex!important",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    // height: '100%',
    "&>img": {
      width: "10px",
    },

    "&:before": {
      width: 0,
      content: "''",
    },

    "&.slick-disabled": {
      border: "none!important",
      cursor: "not-allowed",
    },
  };
};

const SliderWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<BoxProps & { isMobile: boolean }>(({ isMobile }) => ({
  ".slick-track": {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
  },
  "& .slick-list": {
    padding: "0!important",
    height: "26.3rem",
  },
  "& .slick-slide": {
    height: "100%",
    width: "59rem",
    background: "transparent",
    border: "1px solid #151515",
    borderRadius: "1.6rem",
    padding: "3.2rem",
    "& div": {
      display: "flex",
      height: "100%",
      minWidth: isMobile ? "100%!important" : "100%",
    },

    "&:first-of-type": {
      marginLeft: isMobile ? "2rem!important" : "0",
    },
  },
  ".slick-prev": {
    ...arrowStyles(isMobile),
    left: isMobile ? "30%!important" : "42% !important",
  },
  ".slick-next": {
    left: isMobile ? "52%!important" : "48% !important",
    ...arrowStyles(isMobile),
  },
  ".slick-slide:first-of-type": {
    marginLeft: "0rem!important",
  },
})) as any;

const TestimonialCard = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<BoxProps & { isMobile: boolean }>(({ isMobile }) => ({
  cursor: "move",
  background: "transparent",
  padding: isMobile ? "0rem" : "0rem",
  borderRadius: "8px",
  overflow: "hidden",
  height: "max-content",
  //   width: "40%!important",
  "& h3": {
    fontWeight: 700,
    color: "#4F4F4F",
  },
  "& h5": {
    fontSize: "1.6rem",
    marginTop: ".5rem",
    width: isMobile ? "60%" : "100%",
  },
  "& p": {
    color: "#707070",
    fontWeight: 400,
  },
})) as React.FC<BoxProps & { isMobile: boolean }>;

export default MobileCarousel;