import styled from "styled-components";
import { colors } from "../../../utils/colors";
import Navbar from "../../molecules/Navbar/Navbar";

export const Header = () => (
  <StyledHeader>
    <Navbar />
  </StyledHeader>
);

const StyledHeader = styled.header`
  top: 0;
  background: linear-gradient(to bottom, ${colors.white}, #d2dcff);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 20;
`;
