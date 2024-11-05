"use client";


import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../../../public/assets/image/logo/logo.png";
import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Image from "@/components/atoms/image";
import Text from "@/components/atoms/text";
import Link from "@/components/atoms/link";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import TemporaryDrawer from "@/components/atoms/drawer";

// Update styled component to support fixed positioning
const NavbarWrapper = styled.div<{ isFixed: boolean }>`
  background: #154c79;
  padding: 1.9rem 0rem;
  height: 9.2rem;
  width: 100%;
  border-bottom: 1px solid #fff;
  position: ${({ isFixed }) => (isFixed ? "fixed" : "relative")}; // Fix the navbar
  top: 0;
  left: 0;
  z-index: 1000; // Make sure the navbar stays on top
  transition: all 0.3s ease-in-out;

  @media (max-width: 900px) {
    padding: 1.4rem 0;
    height: 5.2rem;
    position: relative; // Keep normal position for mobile
  }
`;

const Navbar = () => {
  const { isMobile } = useScreenResolution();
  const [isFixed, setIsFixed] = useState(false);

  // Use effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper isFixed={isFixed}>
      <SectionLayout>
        {!isMobile ? (
          <Flex justify="space-between" width="100%">
            <Flex width="20%" align="center" cursor="pointer">
              <Link href="/">
                <Image src={Logo} alt="logo" height={60} width={128} />
              </Link>
            </Flex>
            <Flex gap="3.4rem" justify="flex-end" align="center" width="80%">
              <Link href="/">
                <Text
                  type="p"
                  text="Home"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
              <Link href="/about-us">
                <Text
                  type="p"
                  text="Author"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
              
              <Link href="/contact">
                <Text
                  type="p"
                  text="Contact"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
            </Flex>
          </Flex>
        ) : (
          <TemporaryDrawer />
        )}
      </SectionLayout>
    </NavbarWrapper>
  );
};

export default Navbar;

