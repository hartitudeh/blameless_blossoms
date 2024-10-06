"use client";
import { useEffect, useState } from "react";

export const useScreenResolution = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(0);
  //   const [islarge, setIsLarge] = useState(false);

  function getWindowSize() {
    const { screen, innerWidth } = window;
    console.log("isMobileinnerWidth: ", innerWidth, screen.availWidth);
    return { innerWidth: screen.availWidth };
  }

  const setResolution = (screenWidth: number) => {
    setWidth(screenWidth);
    setIsMobile(Boolean(screenWidth <= 900));
  };

  useEffect(() => {
    setResolution(getWindowSize().innerWidth);
    function handleWindowResize() {
      console.log("isMobile innerWidth 2", getWindowSize().innerWidth);
      setResolution(getWindowSize().innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('isMobile: ', isMobile)
  return { isMobile, width };
};
