import styled from "styled-components";
import { colors } from "../../../utils/colors";
import Navbar from "../../molecules/Navbar/Navbar";

export const Header = () => (
  <StyledHeader>
    <Navbar />
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
  color: ${colors.white};
`;
