
import './globals.css'; 
import LoaderLayout from "@/components/organisms/loader/loader";
import StyledComponentsRegistry from "@/lib/registry";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Blameless Blossom",
  description:
    "Blameless Blossom is exclusive!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <LoaderLayout>{children}</LoaderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
