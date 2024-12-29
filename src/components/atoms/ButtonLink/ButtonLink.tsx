import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { colors } from "../../../utils/colors";

interface ButtonProps {
  href: string;
  state?: object;
  children: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonProps> = ({
  href,
  state,
  children,
}) => {
  return (
    <StyledButton to={href} state={state}>
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
  display: flex;
  flex-direction: column;
  text-align: center;
  letter-spacing: -0.025rem;
  cursor: pointer;
  transition: 0.3s;
  border: 2px solid #03a0e3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  &:hover {
    filter: brightness(90%);
    background-color: ${colors.lightBlue};
    color: white;
  }
`;
