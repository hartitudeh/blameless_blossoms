import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Flex from "./flex";
import Image from "./image";
import Link from "./link";
import Text from "./text";
import LogoM from "../../../public/assets/image/logo/logoM.png";
import { LiaTimesSolid } from "react-icons/lia";
import { Divider } from "./divider";
import { FcMenu } from "react-icons/fc";
import { styled } from "styled-components";

type Anchor = "left";

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  width: 100%;
  padding: 0.5rem 1rem 0;
  background: #154c79;
  border-bottom: 1px solid #fff;

  &.scrolled {
    background: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "left" || anchor === "left" ? "auto" : 312,
        height: "auto",
        padding: "1.5rem 2rem",
        "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
          height: "auto",
          zIndex: 210000,
        },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Flex direction="column" gap="5rem">
          <Flex
            justify="space-between"
            align="center"
            styles={{ width: "100%" }}
          >
            <Link href="/">
              <Image src={LogoM} width={59.42} height={23} alt="" />
            </Link>
            <Button
              onClick={toggleDrawer(anchor, false)}
              sx={{
                position: "relative",
                // left: "85%",
                right: "0",
                // width: "100%",
              }}
            >
              <LiaTimesSolid size="3.2rem" color="#000000" />
            </Button>
          </Flex>
          <Flex
            gap="1rem"
            justify="flex-end"
            align="flex-start"
            direction="column"
          >
            <Link href="/">
              <Text
                type="h5"
                text="Homepage"
                color="#000000"
                size="1.6rem"
                weight={500}
                font="Whyte Inktrap"
                styles={{ lineHeight: "2.179rem" }}
              />
            </Link>
            <Divider
              direction="horizontal"
              style={{ width: "100%" }}
              borderStyle=" solid"
            />
            <Link href="/about-us">
              <Text
                type="h5"
                text="About Author"
                color="#000000"
                size="1.6rem"
                weight={500}
                font="Whyte Inktrap"
                styles={{ lineHeight: "2.179rem" }}
              />
            </Link>
            <Divider
              direction="horizontal"
              style={{ width: "100%" }}
              borderStyle=" solid"
            />
            <Link href="/gallery">
              <Text
                type="h5"
                text="Gallery"
                color="#000000"
                size="1.6rem"
                weight={500}
                font="Whyte Inktrap"
                styles={{ lineHeight: "2.179rem" }}
              />
            </Link>
            <Divider
              direction="horizontal"
              style={{ width: "100%" }}
              borderStyle=" solid"
            />
            <Link href="/contact">
              <Text
                type="h5"
                text="Contact"
                color="#000000"
                size="1.6rem"
                weight={500}
                font="Whyte Inktrap"
                styles={{ lineHeight: "2.179rem" }}
              />
            </Link>
            {/* <Divider
              direction="horizontal"
              style={{ width: "100%" }}
              borderStyle=" solid"
            /> */}
            {/* <Link
              href="https://app.proueducation.com/login"
              style={{
                background: "#00E785",
                padding: "1.6rem 4.8rem",
                borderRadius: "4.8rem",
                width: "95%",
                textAlign: "center",
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
      </List>
    </Box>
  );

  const [scrolled, setScrolled] = React.useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    // Check if the user has scrolled 100px down the webpage
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MobileNav className={scrolled ? "scrolled" : ""}>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Flex
            justify="space-between"
            align="center"
            styles={{ padding: "0 0 1rem 1rem" }}
          >
            <Link href="/">
              <Image src={LogoM} width={69.42} height={33} alt="" />
            </Link>
            <Button
              onClick={toggleDrawer(anchor, true)}
              style={{
                minWidth: "0",
              }}
            >
              <FcMenu size="3.2rem" color="#212121" />
            </Button>
          </Flex>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiPaper-root.MuiPaper-elevation": {
                width: "89%",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </MobileNav>
  );
}
