"use client";

import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles"; // Ensure correct import
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReusableHeader from "@/components/atoms/reuseableHeader";
import SectionLayout from "@/components/atoms/sectionLayout";
import Image from "@/components/atoms/image";

// Define a union type for the possible categories
type ImageCategory =
  | "All"
  | "Worship/Music/Ministry"
  | "Education"
  | "Public Speaking/Events"
  | "Publishing"
  | "Communication Coach"
  | "Health"
  | "Community Work";

// Sample image data for each tab
const imageData: Record<ImageCategory, { id: number; src: string; category: string }[]> = {
  All: [
    { id: 1, src: "/assets/image/gallery/all/1.jpeg", category: "Worship/Music" },
    { id: 2, src: "/assets/image/gallery/all/2.jpeg", category: "Worship/Music" },
    { id: 3, src: "/assets/image/gallery/all/3.jpeg", category: "Worship/Music" },
    { id: 4, src: "/assets/image/gallery/all/4.jpeg", category: "Worship/Music" },
    { id: 5, src: "/assets/image/gallery/all/5.jpeg", category: "Worship/Music" },
    { id: 6, src: "/assets/image/gallery/all/6.jpeg", category: "Worship/Music" },
    { id: 7, src: "/assets/image/gallery/all/7.jpeg", category: "Education" },
    { id: 8, src: "/assets/image/gallery/all/8.jpeg", category: "Education" },
    { id: 9, src: "/assets/image/gallery/all/9.jpeg", category: "Education" },
    { id: 10, src: "/assets/image/gallery/all/10.jpeg", category: "Education" },
    { id: 11, src: "/assets/image/gallery/all/11.jpeg", category: "Education" },
    { id: 12, src: "/assets/image/gallery/all/12.jpeg", category: "Education" },
    { id: 13, src: "/assets/image/gallery/all/13.jpeg", category: "Education" },
    { id: 14, src: "/assets/image/gallery/all/14.jpeg", category: "Public Speaking" },
    { id: 15, src: "/assets/image/gallery/all/15.jpeg", category: "Public Speaking" },
    { id: 16, src: "/assets/image/gallery/all/16.jpeg", category: "Public Speaking" },
    { id: 17, src: "/assets/image/gallery/all/17.jpeg", category: "Public Speaking" },
    { id: 18, src: "/assets/image/gallery/all/18.jpeg", category: "Public Speaking" },
    { id: 19, src: "/assets/image/gallery/all/19.jpeg", category: "Public Speaking" },
    { id: 20, src: "/assets/image/gallery/all/20.jpeg", category: "Public Speaking" },
    { id: 21, src: "/assets/image/gallery/all/21.jpeg", category: "Publishing" },
    { id: 22, src: "/assets/image/gallery/all/22.jpeg", category: "Publishing" },
    { id: 23, src: "/assets/image/gallery/all/23.jpeg", category: "Publishing" },
    { id: 24, src: "/assets/image/gallery/all/24.jpeg", category: "Publishing" },
    { id: 25, src: "/assets/image/gallery/all/25.jpeg", category: "Publishing" },
    { id: 26, src: "/assets/image/gallery/all/26.jpeg", category: "Publishing" },
    { id: 27, src: "/assets/image/gallery/all/27.jpeg", category: "Publishing" },
    {
      id: 28,
      src: "/assets/image/gallery/all/28.jpeg",
      category: "Communication Coach",
    },
    { id: 29, src: "/assets/image/gallery/all/1.jpeg", category: "Health" },
    { id: 30, src: "/assets/image/gallery/all/2.jpeg", category: "Community Work" },
  ],

  "Worship/Music/Ministry": [
    { id: 31, src: "/assets/image/gallery/all/3.jpeg", category: "Worship/Music" },
  ],
  Education: [
    { id: 32, src: "/assets/image/gallery/all/4.jpeg", category: "Education" },
  ],
  "Public Speaking/Events": [
    { id: 33, src: "/assets/image/gallery/all/5.jpeg", category: "Public Speaking" },
  ],
  Publishing: [
    { id: 34, src: "/assets/image/gallery/all/6.jpeg", category: "Publishing" },
  ],
  "Communication Coach": [
    {
      id: 35,
      src: "/assets/image/gallery/all/7.jpeg",
      category: "Communication Coach",
    },
    {
      id: 36,
      src: "/assets/image/gallery/all/15.jpeg",
      category: "Communication Coach",
    },
    {
      id: 37,
      src: "/assets/image/gallery/all/17.jpeg",
      category: "Communication Coach",
    },
  ],
  Health: [
    { id: 38, src: "/assets/image/gallery/all/8.jpeg", category: "Health" },
    { id: 39, src: "/assets/image/gallery/all/11.jpeg", category: "Health" },
    { id: 40, src: "/assets/image/gallery/all/13.jpeg", category: "Health" },
  ],
  "Community Work": [
    { id: 41, src: "/assets/image/gallery/all/9.jpeg", category: "Community Work" },
    { id: 42, src: "/assets/image/gallery/all/19.jpeg", category: "Community Work" },
  ],
};

// Styled Modal Box
const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "600px",
  backgroundColor: "#fff",
  boxShadow: theme.shadows[4], // Use a valid shadow index
  padding: theme.spacing(2),
}));

const GalleryPage = () => {
  const [selectedTab, setSelectedTab] = useState<ImageCategory>("All");
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ id: number; src: string; category: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: ImageCategory) => {
    setSelectedTab(newValue);
  };

  // Handle opening modal with clicked image
  const handleOpenModal = (image: { id: number; src: string; category: string }, index: number) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setOpenModal(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle next/previous image in the modal
  const handleNextImage = () => {
    const categoryImages = imageData[selectedTab] || imageData["All"];
    const nextIndex = (currentIndex + 1) % categoryImages.length;
    setCurrentImage(categoryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const categoryImages = imageData[selectedTab] || imageData["All"];
    const prevIndex = (currentIndex - 1 + categoryImages.length) % categoryImages.length;
    setCurrentImage(categoryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <ReusableHeader text="Gallery" />
      <SectionLayout>
        <Box sx={{ width: "100%", padding: 2 }}>
          <Box
            sx={{
              overflowX: "auto", // Allow horizontal scrolling
              display: "flex",
              whiteSpace: "nowrap", // Prevent wrapping of tab labels
              padding: "8px 0",
              scrollbarWidth: "thin", // Optional: makes scrollbar thinner
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#c1c1c1",
                borderRadius: "4px",
              },
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              centered={false} // Disable centering for better scroll experience
              variant="scrollable" // Make tabs scrollable
              scrollButtons="auto" // Show scroll buttons when necessary
              sx={{ width: "100%" }}
            >
              <Tab label="All" value="All" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Worship/Music/Ministry" value="Worship/Music/Ministry" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Education" value="Education" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Public Speaking/Events" value="Public Speaking/Events" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Publishing" value="Publishing" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Communication Coach" value="Communication Coach" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Health" value="Health" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
              <Tab label="Community Work" value="Community Work" disableRipple sx={{ fontSize: "1.2rem", color: "#154c79", "&.Mui-selected": { color: "#154c79" } }} />
            </Tabs>
          </Box>

          {/* Image Grid */}
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {(selectedTab === "All"
              ? imageData["All"]
              : imageData[selectedTab]
            ).map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Image
                  src={image.src}
                  alt={`Category ${image.category}`}
                  borderRadius="8px"
                  onClick={() => handleOpenModal(image, index)}
                />
              </Grid>
            ))}
          </Grid>

          {/* Modal to show full image */}
          <Modal open={openModal} onClose={handleCloseModal}>
            <StyledModalBox>
              {currentImage && (
                <Box>
                  <Image
                    src={currentImage.src}
                    alt={`Full view of ${currentImage.category}`}
                    // width={500}
                    borderRadius="8px"
                  />
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <IconButton onClick={handlePreviousImage}>
                      <ArrowBackIcon />
                    </IconButton>
                    <IconButton onClick={handleNextImage}>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="subtitle1" mt={2}>
                    {currentImage.category}
                  </Typography>
                </Box>
              )}
            </StyledModalBox>
          </Modal>
        </Box>
      </SectionLayout>
    </>
  );
};

export default GalleryPage;
