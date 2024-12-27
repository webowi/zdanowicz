import styled from "styled-components";
import React from "react";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const ContactButton: React.FC<ButtonProps> = ({ href, children }) => {
  return <StyledButton href={href}>{children}</StyledButton>;
};

const StyledButton = styled.a<{ type?: string }>`
  color: ${colors.white};
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
  background-color: ${colors.black};
  &:hover {
    filter: brightness(90%);
  }

  @media ${maxDeviceSize.phone} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
