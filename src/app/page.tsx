"use client";


import Navbar from "@/components/organisms/navbar";
import { styled } from "styled-components";
import { HomePage } from "@/components/molecules/home";
import BlogPage from "@/components/molecules/blog/components/blog";
import FooterSection from "@/components/organisms/footer";

const Homepage = styled.div``;

export default function Home() {
  return (
    <Homepage>
      <Navbar />
      <HomePage />
      <BlogPage />
      <FooterSection />
    </Homepage>
  );
}
