import { ReactNode } from "react";
import Slider from "react-slick";
export function SimpleSlider({
  children,
  slidesPerRow = 1,
  arrowFill = "white",
  infinite = false,
}: {
  children: ReactNode;
  slidesPerRow?: number;
  arrowFill?: string;
  infinite?: boolean;
}) {
  const settings = {
    dots: false,
    infinite: infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: slidesPerRow,
    // arrows: false,
    prevArrow: (
      <svg
        width="456"
        height="456"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 35.92L24.48 29.4C23.71 28.63 23.71 27.37 24.48 26.6L31 20.08"
          stroke={arrowFill}
          stroke-width="2.25406"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="0.5"
          y="0.5"
          width="55"
          height="55"
          rx="27.5"
          stroke={arrowFill}
        />
      </svg>
    ),
    nextArrow: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.91 35.92L31.43 29.4C32.2 28.63 32.2 27.37 31.43 26.6L24.91 20.08"
          stroke={arrowFill}
          stroke-width="2.25406"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="0.5"
          y="0.5"
          width="55"
          height="55"
          rx="27.5"
          stroke={arrowFill}
        />
      </svg>
    ),
  };
  return <Slider {...settings}>{children}</Slider>;
}
