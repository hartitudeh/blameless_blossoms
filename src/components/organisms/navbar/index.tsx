"use client";

import styled from "styled-components";
import Logo from "../../../../public/assets/image/logo/logo.png";
import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Image from "@/components/atoms/image";
import Text from "@/components/atoms/text";
import Link from "@/components/atoms/link";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import TemporaryDrawer from "@/components/atoms/drawer";



// import TemporaryDrawer from "@/component/atom/drawer";
// import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

const NavbarWrapper = styled.div`
  background: #154c79;
  padding: 1.9rem 0rem;
  height: 9.2rem;
  width: 100%;
  border-bottom: 1px solid #fff;

  @media (max-width: 900px) {
    padding: 1.4rem 0;
  }
`;

const Navbar = () => {
  const { isMobile } = useScreenResolution();

  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setDrawerOpen(!drawerOpen);
  // };
  return (
    <NavbarWrapper>
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
                  text="About Author"
                  color="#edfff7"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link>
              <Link href="/gallery">
                <Text
                  type="p"
                  text="Gallery"
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
              
              {/* <Link
                href="https://app.proueducation.com/login"
                style={{
                  background: "#00E785",
                  padding: "1.6rem 4.8rem",
                  borderRadius: "4.8rem",
                }}
              >
                <Text
                  type="p"
                  text="Apply now"
                  color="#151515"
                  size="1.6rem"
                  weight={600}
                  font="Open sans"
                  styles={{ lineHeight: "2.179rem" }}
                />
              </Link> */}
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
