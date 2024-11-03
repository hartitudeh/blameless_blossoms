"use client";

import React, { forwardRef, CSSProperties } from "react";
import styled from "styled-components";

interface FlexProps {
  children: React.ReactNode;
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  gap?: string;
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | "initial";
  alignSelf?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  borderBottom?: string;
  margin?: string;
  padding?: string;
  width?: string;
  styles?: CSSProperties;
  background?: string;
  borderRadius?: string;
  id?: string;
  overflow?: string;
  overflowY?:
    | "auto"
    | "clip"
    | "hidden"
    | "scroll"
    | "visible"
    | "inherit"
    | "initial"
    | "unset";
  overflowX?:
    | "auto"
    | "clip"
    | "hidden"
    | "scroll"
    | "visible"
    | "inherit"
    | "initial"
    | "unset";
  wrap?: "wrap" | "nowrap" | "unset";
  border?: string;
  height?: string;
  cursor?: string;
  flexRef?: React.Ref<HTMLDivElement>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const FlexWrapper = styled.div`
  width: 100%;
`;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      justify,
      align,
      gap,
      direction,
      margin,
      padding,
      background,
      width,
      height,
      borderRadius,
      id,
      overflow,
      overflowY,
      overflowX,
      wrap,
      border,
      borderBottom,
      alignSelf,
      cursor,
      flexRef,
      styles,
      onClick,
    },
    ref
  ) => {
    return (
      <FlexWrapper
        ref={flexRef || ref}
        id={id}
        style={{
          margin,
          display: "flex",
          justifyContent: justify,
          alignItems: align,
          gap,
          cursor,
          flexDirection: direction,
          background,
          width,
          overflow: overflow || "unset",
          overflowY,
          overflowX,
          borderRadius,
          border,
          padding,
          flexWrap: wrap,
          height,
          alignSelf,
          borderBottom,
          ...styles,
        }}
        onClick={onClick}
      >
        {children}
      </FlexWrapper>
    );
  }
);

// Set the display name for easier debugging
Flex.displayName = "Flex";

export default Flex;



// Data analysis
// Graphics
// coding
// Media editor