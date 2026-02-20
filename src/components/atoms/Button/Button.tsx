import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  href?: string;
  to?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  border?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  to,
  variant = "primary",
  children,
  border,
}) => {
  if (to) {
    return (
      <StyledLink to={to} $variant={variant}>
        {children}
      </StyledLink>
    );
  }

  if (href) {
    return (
      <StyledAnchor href={href} $variant={variant} $border={border}>
        {children}
      </StyledAnchor>
    );
  }

  return null;
};

const buttonStyles = css<{ $variant: ButtonVariant; $border?: string }>`
  height: 44px;
  padding: 0 18px;
  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  text-transform: none;

  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease;

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      color: ${colors.white};
      background: ${colors.lightBlack};
      border: 1px solid rgba(0, 0, 0, 0.12);
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);

      &:hover {
        transform: translateY(-1px);
        background: ${colors.black};
        color: ${colors.orange};
        border-color: rgba(238, 52, 56, 0.22);
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.22);
      }
    `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      color: #111;
      background: rgba(238, 52, 56, 0.12);
      border: 1px solid rgba(238, 52, 56, 0.28);
      box-shadow:
        0 10px 22px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.65);

      &:hover {
        transform: translateY(-1px);
        background: rgba(238, 52, 56, 0.18);
        border-color: rgba(238, 52, 56, 0.4);
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.7);
      }
    `}

${({ $variant }) =>
    $variant === "tertiary" &&
    css`
      color: #111;
      background: rgba(255, 255, 255, 0.78);
      border: 1px solid rgba(255, 255, 255, 0.55);

      backdrop-filter: blur(14px) saturate(140%);
      -webkit-backdrop-filter: blur(14px) saturate(140%);

      box-shadow:
        0 14px 34px rgba(0, 0, 0, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.75);

      &:hover {
        transform: translateY(-1px);
        background: rgba(255, 255, 255, 0.88);
        border-color: rgba(238, 52, 56, 0.35);
        box-shadow:
          0 18px 44px rgba(0, 0, 0, 0.22),
          inset 0 1px 0 rgba(255, 255, 255, 0.8);
      }
    `}

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(238, 52, 56, 0.35);
    outline-offset: 3px;
  }

  ${({ $border }) =>
    $border &&
    css`
      border-color: ${$border};
    `}

  @media ${maxDeviceSize.phone} {
    height: 42px;
    padding: 0 16px;
    font-size: 0.98rem;
  }
`;

const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`
  ${buttonStyles}
`;

const StyledAnchor = styled.a<{ $variant: ButtonVariant; $border?: string }>`
  ${buttonStyles}
`;
