"use client";

// FROM HERE

import styled from "styled-components";
import Flex from "@/components/atoms/flex";
import Link from "@/components/atoms/link";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const footerIcons = [
  {
    id: 1,
    icon: <BsFacebook size="2rem" color="#edfff7" />,
    url: "https://www.facebook.com/AyooluwaAdekoya?mibextid=ZbWKwL",
  },
  {
    id: 2,
    icon: <BsTwitter size="2rem" color="#edfff7" />,
    url: "https://x.com/AyooluwaAdekoya?t=CDCQZDAh4Iz3nnoVlZM6jg&s=08",
  },
  {
    id: 3,
    icon: <AiFillInstagram size="2rem" color="#edfff7" />,
    url: "https://www.instagram.com/ayooluwaadekoya?utm_source=qr&igsh=MXZsZTh2ZXU3ODUxYw==",
  },
  {
    id: 4,
    icon: <ImLinkedin size="2rem" color="#edfff7" />,
    url: "https://ng.linkedin.com/in/ayooluwa-adekoya-32b106193",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      {/* <SocialHandle> */}
      <Flex justify="center" gap="2rem" margin="0 auto 1rem">
        {footerIcons.map((icon) => (
          <Link href={icon.url} key={icon.id} target="_blank">
            {icon.icon}
          </Link>
        ))}
      </Flex>
      {/* </SocialHandle> */}
      <hr />

      <Flex direction="column" align="center" justify="center" padding="1rem 0">
        <CopyrightText>
          © {currentYear} All Rights Reserved @ Nectar Word 
          <br />
          <span>
            With ❤️ by &nbsp;
            <Link href="https://hartitudeh.github.io" target="_blank" color="#d4b48d">
              Hartitudeh Tech Solutions
            </Link>
          </span>
        </CopyrightText>
      </Flex>
    </FooterWrapper>
  );
};

export default Footer;

const CopyrightText = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #edfff7;
`;



const FooterWrapper = styled.footer`
  padding: 20px 0;
  background-color: #154c79;
  color: white;
`;


