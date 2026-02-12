import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface ButtonProps {
  href?: string;
  to?: string;
  secondary?: boolean;
  children: React.ReactNode;
  border?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  to,
  secondary,
  children,
  border,
}) => {
  if (to) {
    return (
      <StyledLink to={to} $secondary={secondary}>
        {children}
      </StyledLink>
    );
  }

  if (href) {
    return (
      <StyledAnchor href={href} $secondary={secondary} $border={border}>
        {children}
      </StyledAnchor>
    );
  }

  return null;
};

const buttonStyles = css<{ $secondary?: boolean }>`
  color: ${({ $secondary }) => ($secondary ? colors.orange : colors.white)};
  background-color: ${({ $secondary }) =>
    $secondary ? "transparent" : colors.lightBlack};
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  margin: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: 500;
  border: ${({ $secondary }) =>
    $secondary ? `2px solid ${colors.orange}` : "2px solid transparent"};
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $secondary }) =>
      $secondary ? colors.orange : colors.black};
    color: ${({ $secondary }) => ($secondary ? colors.black : colors.orange)};
    box-shadow: 0px 8px 20px rgba(249, 178, 0, 0.2);
    border-color: ${colors.orange};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }

  @media ${maxDeviceSize.phone} {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

const StyledLink = styled(Link)<{ $secondary?: boolean }>`
  ${buttonStyles}
`;

const StyledAnchor = styled.a<{ $secondary?: boolean; $border?: string }>`
  ${buttonStyles}
  border-color: ${({ $border, $secondary }) =>
    $border || $secondary ? colors.orange : "transparent"};
`;
