"use client";


import Navbar from "@/components/organisms/navbar";
import { styled } from "styled-components";
import { HomePage } from "@/components/molecules/home";
// import { ArticlePage } from "@/components/molecules/article";
import BlogPage from "@/components/molecules/blog/components/blog";
// import BlogPage2 from "@/components/molecules/blog/components/blog2";
// import Footer from "@/components/organisms/footer";
import FooterSection from "@/components/organisms/footer/index2";

const Homepage = styled.div``;

export default function Home() {
  return (
    <Homepage>
      <Navbar />
      <HomePage />
      <BlogPage />
      {/* <Footer /> */}
      <FooterSection />
    </Homepage>
  );
}
