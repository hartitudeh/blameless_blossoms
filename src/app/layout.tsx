
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
    "Blameless Blossom is often used metaphorically to describe something or someone that is pure, innocent, and free from wrongdoing. The imagery of a BLOSSOM evokes beauty, growth, and new beginnings, while the term BLAMELESS suggests moral innocence or lack of guilt. Together, it paints a picture of something delicate and virtuous, untouched by negative influences, often used to represent a person or idea that embodies goodness or innocence.",
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
