"use client";
import React from "react";
import styled from "styled-components";
import Flex from "@/components/atoms/flex";
import Link from "@/components/atoms/link";
import SectionLayout from "@/components/atoms/sectionLayout";

// Sample Blog Content
const blogPost = {
  title: "Understanding the Fundamentals of Web Development",
  author: "Imisi Adekoya",
  date: "October 5, 2024",
  content: `
    Web development has been evolving rapidly over the past few years. From the basic HTML, CSS, and JavaScript to modern-day frameworks 
    like React, Angular, and Vue.js, the web development space is expanding at an incredible pace. Understanding the fundamentals of web 
    development is crucial for both beginners and advanced developers who want to keep up with the ever-changing landscape of web technologies.
    
    In this post, we will explore the basics of HTML5, CSS3, and JavaScript ES6, along with insights into modern front-end and back-end technologies...
  `,
};

// Sidebar hints
const sideContent = [
  {
    title: "How to Improve Your CSS Skills",
    link: "/blog/improve-css-skills",
  },
  {
    title: "Top 10 JavaScript Frameworks",
    link: "/blog/top-js-frameworks",
  },
  {
    title: "Why React is Popular in 2024",
    link: "/blog/react-popular-2024",
  },
  {
    title: "Web Development Career Path",
    link: "/blog/web-development-career",
  },
];

// Main Blog Wrapper
const BlogWrapper = styled(SectionLayout)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 2rem 1rem;
  }
`;

// Blog Content Section
const BlogContent = styled.article`
  width: 70%;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

// Sidebar Section
const Sidebar = styled.aside`
  width: 30%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

// Blog Title
const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #154c79;
  margin-bottom: 1rem;
`;

// Blog Meta (Author and Date)
const BlogMeta = styled.div`
  font-size: 1rem;
  color: #999;
  margin-bottom: 2rem;
`;

// Blog Text Content
const BlogText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #333;
  white-space: pre-wrap;
`;

// Sidebar Links
const SidebarLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #154c79;

  &:hover {
    text-decoration: underline;
    color: #0d3b66;
  }
`;

// Sidebar Title
const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  color: #0d3b66;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #154c79;
  padding-bottom: 0.5rem;
`;

const BlogPage2: React.FC = () => {
  return (
    <SectionLayout margin="2rem 0" padding="0 1rem" height="100%">
      <Flex direction="column" gap="1rem">
        {/* Blog Wrapper */}
        <BlogWrapper>
          {/* Main Blog Content */}
          <BlogContent>
            <BlogTitle>{blogPost.title}</BlogTitle>
            <BlogMeta>
              {`By ${blogPost.author} | ${blogPost.date}`}
            </BlogMeta>
            <BlogText>{blogPost.content}</BlogText>
          </BlogContent>

          {/* Sidebar Hints */}
          <Sidebar>
            <SidebarTitle>Related Posts</SidebarTitle>
            {sideContent.map((hint, index) => (
              <SidebarLink key={index} href={hint.link}>
                {hint.title}
              </SidebarLink>
            ))}
          </Sidebar>
        </BlogWrapper>
      </Flex>
    </SectionLayout>
  );
};

export default BlogPage2;
