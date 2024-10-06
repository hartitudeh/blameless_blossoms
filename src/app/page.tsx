"use client";


import Navbar from "@/components/organisms/navbar";
import { styled } from "styled-components";
import { HomePage } from "@/components/molecules/home";
import { ArticlePage } from "@/components/molecules/article";

const Homepage = styled.div``;

export default function Home() {
  return (
    <Homepage>
      <Navbar />
      <HomePage />
      <ArticlePage />
    </Homepage>
  );
}
