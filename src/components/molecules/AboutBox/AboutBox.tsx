import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../../utils/colors";

interface AboutBoxProps {
  Icon: React.ElementType;
  Title: string;
  duration: number;
  Subtitle: string;
}

export const AboutBox: React.FC<AboutBoxProps> = ({
  Icon,
  Title,
  duration,
  Subtitle,
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      <IconBadge aria-hidden="true">
        <Icon size={22} />
      </IconBadge>

      <TitleEl>{Title}</TitleEl>
      <SubtitleEl>{Subtitle}</SubtitleEl>
    </Card>
  );
};

const Card = styled(motion.div)`
  min-width: 0;
  width: 100%;
  position: relative;
  overflow: hidden;

  border-radius: 18px;
  padding: 18px 16px;

  text-align: left;
  display: grid;
  gap: 8px;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;

  &:before {
    content: "";
    position: absolute;
    inset: -1px;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.28),
      rgba(255, 255, 255, 0.1) 35%,
      rgba(255, 255, 255, 0) 62%
    );
    opacity: 0.65;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.7);
    box-shadow:
      0 22px 46px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.85);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const IconBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
`;

const TitleEl = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 900;
  color: #111;
  letter-spacing: 0.01em;
`;

const SubtitleEl = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.68);
  font-size: 0.98rem;
  line-height: 1.45;
`;
