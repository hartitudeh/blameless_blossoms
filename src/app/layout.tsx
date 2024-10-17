
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
    "Exclusive study, abroad scholarship and online degreees for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body>
        <StyledComponentsRegistry>
          <LoaderLayout>{children}</LoaderLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
