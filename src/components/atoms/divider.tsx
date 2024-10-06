import styled from "styled-components";

export const Divider = styled.div<{
  margin?: string;
  direction?: string;
  borderStyle?: string;
}>`
  border-bottom: ${({ direction, borderStyle }) =>
    direction === "horizontal"
      ? `1px ${borderStyle || "solid"} #4F4F4F2B`
      : "none"};
  border-left: ${({ direction, borderStyle }) =>
    direction === "vertical"
      ? `2px ${borderStyle || "solid"} #4F4F4F`
      : "none"};
  padding-bottom: 4px;
  margin: ${({ margin }) => margin || "10px 0"};
`;
