"use client";
import { useEffect, useState } from "react";

export const useScreenResolution = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(0);

  const getWindowSize = () => {
    if (typeof window !== "undefined") {
      // Safe to access window
      const { innerWidth } = window;
      console.log("isMobile innerWidth: ", innerWidth, window.screen.availWidth);
      return { innerWidth: window.screen.availWidth };
    }
    // Return default value if window is not available (e.g., during SSR)
    return { innerWidth: 0 };
  };

  const setResolution = (screenWidth: number) => {
    setWidth(screenWidth);
    setIsMobile(screenWidth <= 900); // Set isMobile based on the width
  };

  useEffect(() => {
    const screenSize = getWindowSize().innerWidth;
    setResolution(screenSize);

    const handleWindowResize = () => {
      const resizedScreenSize = getWindowSize().innerWidth;
      setResolution(resizedScreenSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isMobile, width };
};
