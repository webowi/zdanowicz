import React from "react";
import styled from "styled-components";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  videoDescription: string;
  fullScreen?: boolean;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  poster,
  videoDescription,
  fullScreen,
}) => {
  return (
    <>
      <StyledVideoBackground
        src={src}
        poster={poster}
        muted
        autoPlay
        loop
        playsInline
        aria-describedby="video-description"
        aria-label={videoDescription}
        fullScreen={fullScreen}
      />
      <VisuallyHidden id="video-description">{videoDescription}</VisuallyHidden>
    </>
  );
};

const StyledVideoBackground = styled.video<{ fullScreen?: boolean }>`
  width: ${({ fullScreen }) => (fullScreen ? "100vw" : "100%")};
  height: ${({ fullScreen }) => (fullScreen ? "100vh" : "100%")};
  object-fit: cover;
  /* filter: brightness(50%); */
`;

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
