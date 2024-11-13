
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
  title: "Blameless Blossoms",
  description:
    "Blameless Blossoms is a curative approach to parenting that focuses on how we, as adults, need to work on ourselves as we raise children. It harnesses a perspective that begins with us, healing us of our ignorance, deceptions, hurts, pains, and trauma that we failed to reconcile with until we were grown-ups or those we are going through currently; the wholesome life we must be restored into and the renewed mind we must operate daily in diverse areas.",
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
