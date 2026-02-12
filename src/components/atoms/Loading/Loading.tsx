import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { Mosaic } from "react-loading-indicators";

interface LoadingProps {
  top?: string;
}

export const Loading: React.FC<LoadingProps> = ({ top = "50%" }) => {
  return (
    <LoadingContainer top={top}>
      <Mosaic color={colors.orange} size="medium" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div<{ top: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;
