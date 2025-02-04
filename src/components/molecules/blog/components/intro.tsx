
import Flex from '@/components/atoms/flex';
import Text from '@/components/atoms/text';
import { useScreenResolution } from '@/lib/extentions/hook/useScreenResolution';
import React from 'react';
// import styled from "styled-components";

// const Center = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     height: 30vh;
//     gap: 2.5rem;
//     `;  




const Intro = () => {
      const { isMobile } = useScreenResolution();
    
  return (
    <Flex direction="column" justify='center' align='center' gap='2.5rem' height={isMobile ? "35vh" : "35vh"}>
        <Flex direction="column" justify='center' align='center' styles={{position: "relative",}}>
        <Text styles={{fontSize: "3rem", fontWeight: "bold", padding: "0", margin: "0", textAlign: "center", fontFamily: "Whyte Inktrap", textWrap: 'nowrap'}} type="h1" text="BLAMELESS BLOSSOMS" />
      <Text styles={{margin: "0", padding: "0", position: "absolute", left: "36.65%", top: "72%" }} type="span" text="Vol. 1 No 1" color="#766d6d" />
      </Flex>
      <Text width={isMobile ? 350 : 650} styles={{textAlign: "center"}} type="span" text=' "That you may be blameless and innocent, children of God without blemish in the midst of a crooked and twisted generation, among whom you shine as lights in the world" ' color="#766d6d" />
    </Flex>
  );
};
export default Intro;
