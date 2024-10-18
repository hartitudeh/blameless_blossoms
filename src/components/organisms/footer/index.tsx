"use client";

import Flex from "@/components/atoms/flex";
import { Grid } from "@/components/atoms/grid";
import Image from "@/components/atoms/image";
import Link from "@/components/atoms/link";
import SectionLayout from "@/components/atoms/sectionLayout";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaEnvelopeOpenText, FaWhatsappSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: fit-content;
  background: #154c79;
  padding: 5rem 0 1rem;

  @media (max-width: 900px) {
    padding: 3rem 0 1rem;
  }
`;

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

const recentBooks = [
  "The New Me",
  "Cast Your Net",
  "Keep Pushing",
  "Alone With My Thought",
];
const usefulLinks = [
  { text: "About Me", href: "/waitlist", color: "#edfff7" },
  { text: "Gallery", href: "/ai-guide", color: "#edfff7" },
  { text: "FAQs", href: "/faqs", color: "#edfff7" },
];

const supports = [
  { href: "/contact", text: "Become a Partner", color: "#edfff7" },
  { href: "/terms-conditions", text: "Donate", color: "#edfff7" },
  { href: "/privacy-policy", text: "Privacy Policy", color: "#edfff7" },
];

const contacts = [
  {
    href: "/email",
    text: "ayooluwaeadekoya@gmail.com",
    color: "#edfff7",
    icon: <FaEnvelopeOpenText size="2rem" color="#edfff7" />,
  },
  {
    href: "/careers",
    text: " +2348140545090",
    color: "#edfff7",
    icon: <IoCall size="2rem" color="#edfff7" />,
  },
  {
    href: "/press",
    text: "+2347032571208",
    color: "#edfff7",
    icon: <FaWhatsappSquare size="2rem" color="#edfff7" />,
  },
//   {
//     href: "/blogs",
//     text: "Blogs",
//     color: "#edfff7",
//     icon: <ImLinkedin size="2rem" color="#edfff7" />,
//   },
];

const FooterSection = () => {
  const { isMobile } = useScreenResolution();
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <SectionLayout
        margin="0 auto"
        padding={isMobile ? "0rem 1.5rem 0 1.5rem" : "1rem"}
      >
        <Flex direction={isMobile ? "column" : "row"} justify="space-between" gap={isMobile ? "3rem" : "0"}>
          <Flex direction={isMobile ? "row" : "column"} justify="flex-start" gap={isMobile ? "3rem" : "2.5rem"} align={isMobile ? "center" : "flex-start"}>
            <Link href="/">
              <Image
                src="/assets/image/logo/logo.png"
                alt="logo"
                width={128}
                height={60}
              />
            </Link>

            <Grid
              columns="repeat(4, 1fr)"
              gap="1rem"
              width="fit-content"
              align="unset"
              justify="flex-start"
              margin="0"
            >
              {footerIcons.map((icon) => (
                <Link href={icon.url} key={icon.id} target="_blank">
                  {icon.icon}
                </Link>
              ))}
            </Grid>
          </Flex>

          <Flex direction={isMobile ? "row" : "column"} gap="2rem">
            <div className="recentBooks">
              <Text
                type="h3"
                text="Journals"
                color="#edfff7"
                padding={isMobile ? "0 0 5px" : "0 0 25px"}
                weight={700}
                margin={isMobile ? "0 0 .8rem" : ""}
                size="3rem"
              />
              <Flex
                direction="column"
                gap="1rem"
                styles={{ fontWeight: "400" }}
              >
                {recentBooks.map((country, index) => (
                  <Link
                    key={index}
                    href={`/visa/countries/${country
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    text={country}
                    color="#edfff7"
                  />
                ))}
              </Flex>
            </div>
          </Flex>

          <Flex direction="column" gap="2rem">
            <div className="usefulLinks">
              <Text
                type="h3"
                text="Useful Links"
                color="#edfff7"
                padding={isMobile ? "0 0 5px" : "0 0 25px"}
                weight={700}
                margin={isMobile ? "0 0 .8rem" : ""}
                size="3rem"
              />
              <Flex
                direction="column"
                gap="1rem"
                styles={{ fontWeight: "400" }}
              >
                {usefulLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    text={link.text}
                    color={link.color}
                  />
                ))}
              </Flex>
            </div>
          </Flex>

          <Flex direction="column" gap="2rem">
            <div className="support">
              <Text
                type="h3"
                text="Support"
                color="#edfff7"
                padding={isMobile ? "0 0 5px" : "0 0 25px"}
                weight={700}
                margin={isMobile ? "0 0 .8rem" : ""}
                size="3rem"
              />
              <Flex
                direction="column"
                gap="1rem"
                styles={{ fontWeight: "400" }}
              >
                {supports.map((support, index) => (
                  <Link
                    key={index}
                    href={support.href}
                    text={support.text}
                    color={support.color}
                  />
                ))}
              </Flex>
            </div>
          </Flex>

          <Flex direction="column" gap="2rem">
            <div className="contacts">
              <Text
                type="h3"
                text="Contacts"
                color="#edfff7"
                padding={isMobile ? "0 0 5px" : "0 0 25px"}
                weight={700}
                margin={isMobile ? "0 0 .8rem" : ""}
                size="3rem"
              />
              <Flex
                direction="column"
                gap="1rem"
                styles={{ fontWeight: "400" }}
              >
                {contacts.map((about, index) => (
                  <Flex key={index} align="center" gap="0.9rem">
                    {about.icon}
                    <Link
                      href={about.href}
                      text={about.text}
                      color={about.color}
                    />
                  </Flex>
                ))}
              </Flex>
            </div>
          </Flex>
        </Flex>
      </SectionLayout>
      <hr style={{ margin: "3rem 0 1rem" }} />

      <Flex direction="column" align="center" justify="center" padding="1rem 0">
        <CopyrightText>
          © {currentYear} All Rights Reserved @ Nectar Word <br />
          <span>
            With ❤️ by &nbsp;
            <Link href="https://hartitudeh.github.io" target="_blank">
              Hartitudeh Tech Solutions
            </Link>
          </span>
        </CopyrightText>
      </Flex>
    </FooterWrapper>
  );
};

export default FooterSection;

const CopyrightText = styled.p`
  color: #06062a;
  font-size: 2rem;
  text-align: center;

  a {
    color: crimson;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
