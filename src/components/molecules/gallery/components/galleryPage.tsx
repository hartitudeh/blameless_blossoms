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
    { id: 1, src: "/assets/image/header-bg.jpg", category: "Worship/Music" },
    { id: 2, src: "/assets/image/header-bg.jpg", category: "Education" },
    { id: 3, src: "/assets/image/header-bg.jpg", category: "Public Speaking" },
    { id: 4, src: "/assets/image/header-bg.jpg", category: "Publishing" },
    {
      id: 5,
      src: "/assets/image/header-bg.jpg",
      category: "Communication Coach",
    },
    { id: 6, src: "/assets/image/header-bg.jpg", category: "Health" },
    { id: 7, src: "/assets/image/header-bg.jpg", category: "Community Work" },
  ],
  "Worship/Music/Ministry": [
    { id: 8, src: "/assets/image/header-bg.jpg", category: "Worship/Music" },
  ],
  Education: [
    { id: 9, src: "/assets/image/header-bg.jpg", category: "Education" },
  ],
  "Public Speaking/Events": [
    { id: 10, src: "/assets/image/header-bg.jpg", category: "Public Speaking" },
  ],
  Publishing: [
    { id: 11, src: "/assets/image/header-bg.jpg", category: "Publishing" },
  ],
  "Communication Coach": [
    {
      id: 12,
      src: "/assets/image/header-bg.jpg",
      category: "Communication Coach",
    },
  ],
  Health: [{ id: 13, src: "/assets/image/header-bg.jpg", category: "Health" }],
  "Community Work": [
    { id: 14, src: "/assets/image/header-bg.jpg", category: "Community Work" },
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
              overflowX: "auto",
              display: "flex",
              whiteSpace: "nowrap",
              padding: "8px 0",
            }}
          >
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
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
                <img
                  src={image.src}
                  alt={`Category ${image.category}`}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
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
                  <img
                    src={currentImage.src}
                    alt={`Full view of ${currentImage.category}`}
                    style={{ width: "100%", borderRadius: "8px" }}
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
