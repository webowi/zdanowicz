import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../../utils/colors";

interface AboutBoxProps {
  Icon: React.ElementType;
  Title: string;
  duration: number;
}

export const AboutBox: React.FC<AboutBoxProps> = ({
  Icon,
  Title,
  duration,
}) => {
  return (
    <StyledBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      <IconWrapper>
        <Icon size={32} color={colors.yellow} />
      </IconWrapper>
      <h3>{Title}</h3>
    </StyledBox>
  );
};

const StyledBox = styled(motion.div)`
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  background: linear-gradient(145deg, ${colors.lightBlack}, ${colors.black});

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(255, 223, 0, 0.5);
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.white};
  }
`;

const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  ${StyledBox}:hover & {
    transform: scale(1.1);
  }
`;
