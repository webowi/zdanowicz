import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary" | "transparent";
}

export const Button: React.FC<ButtonProps> = ({ href, children, type }) => {
  if (href) {
    return (
      <StyledLink type={type} to={href}>
        {children}
      </StyledLink>
    );
  }

  return <StyledButton type={type}>{children}</StyledButton>;
};

const StyledButtonBase = `
  color: ${colors.black};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.025rem;
  cursor: pointer;
  gap: 0.25rem;
  font-size: 1rem;

  &:hover {
    filter: brightness(90%);
  }
`;

const StyledButton = styled.button<{ type?: string }>`
  ${StyledButtonBase}

  @media ${maxDeviceSize.phone} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  background-color: ${({ type }) => {
    if (type === "transparent") {
      return "transparent";
    }
  }};
  color: ${({ type }) => {
    if (type === "transparent") {
      return colors.black;
    }
  }};
  border: ${({ type }) => {
    if (type === "transparent") {
      return "none";
    }
  }};
`;

const StyledLink = styled(Link)<{ type?: string }>`
  ${StyledButtonBase}

  background-color: ${({ type }) => {
    if (type === "transparent") {
      return "transparent";
    }
  }};
  color: ${({ type }) => {
    if (type === "transparent") {
      return colors.black;
    }
  }};
`;
