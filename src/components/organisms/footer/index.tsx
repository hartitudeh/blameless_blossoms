"use client";

import Flex from "@/components/atoms/flex";
import SectionLayout from "@/components/atoms/sectionLayout";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import React from "react";
import styled from "styled-components";
import Logo from "../../../../public/assets/image/logo/logo.svg";
import Image from "@/components/atoms/image";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  const { isMobile } = useScreenResolution();

  return (
    <FooterContainer>
      <SectionLayout>
        <Flex
          direction={isMobile ? "column" : "row"}
          justify={isMobile ? "center" : "flex-start"}
          wrap="nowrap"
        >
          {/* Footer Left */}
          <Flex direction="column" gap="1rem">
            <Flex width="20%" align="center" cursor="pointer">
              <Link href="/">
                <Image src={Logo} alt="logo" height={36} width={93} />
              </Link>
            </Flex>
            <Text text="Nectar World" type="h2" size={30} />
            <Text text="Content Writer" type="span" />

            <Flex direction="row" gap="1.5rem">
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
              <Link href="/">
                <Text
                  type="p"
                  text="Blog"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
              <Link href="/">
                <Text
                  type="p"
                  text="Projects"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
              <Link href="/">
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

          <hr
            style={{
              border: ".1px solid #fff",
              margin: "1.5rem 0",
              display: isMobile ? "flex" : "none",
            }}
          />

          {/* Footer Center */}
          <Flex direction="column" gap="2rem">
            <Flex direction="row" gap="1rem">
            <IoLocation size={25} />
              <Text
                type="span"
                text="123 This is a Street, A Locality, Region state"
              />
            </Flex>
            <Flex direction="row" gap="1rem">
            <FaPhoneAlt size={25} />
              <Text type="span" text="+1 234567890" />
            </Flex>
            <Flex direction="row" gap="1rem">
            <FaEnvelopeOpenText size={25} />
              <Link href="mailto:myname@mail.com">
                <Text
                  type="p"
                  text="myname@mail.com"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
            </Flex>
          </Flex>

          <hr
            style={{
              border: ".1px solid #fff",
              margin: "1.5rem 0",
              display: isMobile ? "flex" : "none",
            }}
          />

          {/* Footer Right */}
          <Flex direction="column" gap="1rem">
            <Text
              type="p"
              text="About Author"
              color="#edfff7"
              size="1.6rem"
              weight={600}
              font="Open sans"
              styles={{ lineHeight: "2.179rem" }}
            />

            <Text
              styles={{ textWrap: "wrap" }}
              type="span"
              text="Not a web developer, but I have a knack for creating stunning websites and applications. Everywhere @sdavidprince"
            />

            <Flex direction="row" gap="1.5rem" margin="1rem 0">
              <Link href="/">
                <FaWhatsappSquare size={30} />
              </Link>
              <Link href="/">
                <FaInstagramSquare size={30} />
              </Link>
              <Link href="/">
                <FaFacebookSquare size={30} />
              </Link>
              <Link href="/">
                <FaWhatsappSquare size={30} />
              </Link>
              <Link href="/">
                <FaWhatsappSquare size={30} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </SectionLayout>

      {/* Footer Bottom */}
      <hr style={{margin: "3rem 0 1rem" }} />
      <Copyright>
        © 2024 SDavidPrince. Demo of a footer. Some Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #154c79;
  color: #fff;
  padding-top: 5rem;
  //   text-align: left;
`;





 

const Copyright = styled.p`
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-top: 15px;
`;
