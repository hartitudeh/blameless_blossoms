"use client";

import Aos from "aos";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: "fff";
  flex-direction: column;
`;
interface LayoutProps {
  children: React.ReactNode;
}

const LoaderLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for demonstration purposes
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined") {
        setIsWindowLoaded(true);
      }
      Aos.init({
        duration: 800, // Animation duration
        once: false, // Whether animation should happen only once
        mirror: true,
      });
      setIsLoading(isWindowLoaded);
    }, 500); // Adjust the loading time as needed
    return () => clearTimeout(timeout);
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <span className="loader"></span>
        </LoaderWrapper>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default LoaderLayout;
