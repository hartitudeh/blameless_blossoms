import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import Image from "@/components/atoms/image";
import { IoClose } from "react-icons/io5";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

// Define the content interface
interface SideContent {
  id: number;
  title: string;
  content: string;
  image: string;
  url: string; // Add a URL property for the iframe link
}

const SideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    margin-bottom: 3rem;
  }
`;

const PostCard = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Flex = styled.div<{ justify?: string; gap?: string; width?: string; align?: string }>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "auto"};
  align-items: ${(props) => props.align || "center"};
`;


// const Image = styled.img<{ width?: number }>`
//   width: ${(props) => (props.width ? `${props.width}px` : "auto")};
//   height: auto;
// `;

const ModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  height: 80vh;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

const sideContent: SideContent[] = [
  {
    id: 1,
    title: "Daughter Of Confidence",
    content: "Full content of Tracing the Root. This can include more details about the topic.",
    image: "/assets/image/aug.png",
    url: "https://theshallowtalesreview.com.ng/daughter-of-confidence/", // Provide URL for iframe
  },
  {
    id: 2,
    title: "Elegy For My Mother",
    content: "Full content of another article. This can include more details about the topic.",
    image: "/assets/image/mother.jpeg",
    url: "https://www.afritondo.com/afritondo/elegyformymother",
  },
  {
    id: 3,
    title: "Ode To My Father",
    content: "Full content of further reading. This can include more details about the topic.",
    image: "/assets/image/dilemma.jpeg",
    url: "https://selar.co/em5w?currency=RWF",
  },
  {
    id: 4,
    title: "Restored By The God Of My Mother",
    content: "Full content of further reading. This can include more details about the topic.",
    image: "/assets/image/redeem.jpeg",
    url: "https://issuu.com/craigruhl/docs/faith_on_every_corner_-_may_2022",
  },
  {
    id: 5,
    title: "Like Calves Released From The Stall",
    content: "Full content of further reading. This can include more details about the topic.",
    image: "/assets/image/article.png",
    url: "https://parousiamagazine.wordpress.com/2022/12/25/like-calves-released-from-the-stall-by-ayooluwa-e-adekoya-imisi-joy-to-the-world-issue-14-parousia/",
  },
];

export const SideConent = () => {
  const { isMobile } = useScreenResolution();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const handleOpenModal = (url: string) => {
    setSelectedUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUrl("");
  };

  return (
    <SideContentWrapper>
      <Typography style={{ fontSize: "2.5rem", fontFamily: "Whyte Inktrap" }} variant="h6">
        Related Articles
      </Typography>
      {sideContent.map((content) => (
        <PostCard key={content.id} onClick={() => handleOpenModal(content.url)}>
          <Flex justify="flex-start" gap="1rem" width="100%" align="center">
            <Image src={content.image} alt={content.title} width={50} styles={{ width: "10%", height: "auto", borderRadius: "50%", }} />
            <Typography style={{ width: "80%", fontWeight: "bold", fontSize: isMobile ? "1.7rem" : "2rem" }} variant="h6">
              {content.title}
            </Typography>
          </Flex>
        </PostCard>
      ))}

      {/* Modal with iframe */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalWrapper>
          <Box style={{ position: "absolute", top: 10, right: 10 }}>
            <Button onClick={handleCloseModal}>
            <IoClose size={30} color="crimson" />
            </Button>
          </Box>
          <iframe
            src={selectedUrl}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Article Viewer"
          />
        </ModalWrapper>
      </Modal>
    </SideContentWrapper>
  );
};

export default SideConent;
