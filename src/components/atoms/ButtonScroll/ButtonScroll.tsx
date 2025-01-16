import styled from "styled-components";
import { Link } from "react-scroll";
import React from "react";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export const ButtonScroll: React.FC<ButtonProps> = ({ to, children }) => {
  return (
    <StyledButton href="#" to={to} spy smooth offset={50} duration={500}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Link)`
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
  transition: 0.3s;
  border: 2px solid ${colors.lightBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    filter: brightness(90%);
    background-color: ${colors.lightBlue};
    color: white;
  }

  @media ${maxDeviceSize.phone} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
