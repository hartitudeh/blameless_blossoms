"use client";
import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import Image from "@/components/atoms/image"; 
import SectionLayout from "@/components/atoms/sectionLayout"; 
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import ProfileCard from "./myBlog";

interface Comment {
  id: number;
  author: string;
  text: string;
  likes: number;
  replies: Comment[];
}

interface BlogPost {
  id: number;
  title: string;
  content: string[];
  image: string;
  author: string;
  date: string;
  description: string;
  likes: number;
  comments: Comment[];
}

const BlogPage = () => {
  const { isMobile } = useScreenResolution();
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [fullContent, setFullContent] = useState("");

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
    setFullContent("");
  };

  return (
    <SectionLayout style={{ marginTop: "5rem" }}>
      <Text
        type="h1"
        text="My Blogs"
        weight={700}
        size={isMobile ? "3.2rem" : "5.052rem"}
        styles={{
          lineHeight: isMobile ? "2.56rem" : "6.06rem",
          fontFamily: "Whyte Inktrap",
          display: isMobile ? "none" : "block",
        }}
      />

      <ProfileCard />

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "50%" },  
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 1.5,
          borderRadius: "10px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}>
          {selectedPost && (
            <>
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                styles={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "350px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <Typography
                style={{ fontSize: "3rem", fontFamily: "Whyte Inktrap" }}
                variant="h4"
              >
                {selectedPost.title}
              </Typography>
              
              <div
                style={{ color: "#5d5d5d", fontSize: "1.5rem" }}
                dangerouslySetInnerHTML={{ __html: fullContent }}
              />
            </>
          )}
        </Box>
      </Modal>
    </SectionLayout>
  );
};

export default BlogPage;



