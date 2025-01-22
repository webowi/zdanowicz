import React from "react";
import styled from "styled-components";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface ImageProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export const Image: React.FC<ImageProps> = ({ src, alt, loading = "lazy" }) => {
  return <StyledImage loading={loading} src={src} alt={alt} />;
};

const StyledImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  box-shadow: 0px 1px 18px 1px rgba(249, 178, 0, 1);
  border-radius: 8px;
  @media ${maxDeviceSize.tablet} {
    width: 100%;
  }
`;
