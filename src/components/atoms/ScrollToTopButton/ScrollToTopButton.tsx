import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const ScrollToTopButton: React.FC = () => {
  return (
    <StyledScrollToTop
      smooth
      component={<CustomIcon />}
      color={colors.black}
      style={{
        right: "18px",
        bottom: "110px",
      }}
    />
  );
};

const StyledScrollToTop = styled(ScrollToTop)`
  z-index: 2500;
  background-color: ${colors.orange};
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    bottom: 260px !important;
    right: 14px !important;
  }

  &:hover {
    background-color: ${colors.lightBlack};
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const CustomIcon = styled(FaArrowUp)`
  color: ${colors.black};
  font-size: 1.5rem;
`;
