import React from "react";
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const ButtonModal: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  color: ${colors.yellow};
  background-color: transparent;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  margin: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: 500;
  border: 2px solid ${colors.yellow};
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;

  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.black};
    box-shadow: 0px 8px 20px rgba(249, 178, 0, 0.2);
    border-color: ${colors.yellow};
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
