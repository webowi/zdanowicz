import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const ScrollToTopButton: React.FC = () => {
  return (
    <StyledScrollToTop smooth component={<CustomIcon />} color={colors.black} />
  );
};

const StyledScrollToTop = styled(ScrollToTop)`
  background-color: ${colors.orange};
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;

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
