import React, { useRef, useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import { Player, BigPlayButton } from "video-react";
// import BlockCard from "./BlockCard";

const StyledHeading = styled.div`
  font-size: 22px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  color: #000000;
  position: relative;
  margin-bottom: 13px !important;
`;

const VideoComponent = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });
  const { fluid, width, height, src } = props;
  const playerRef = useRef(null);
  console.log(
    "playerRef",
    mounted && playerRef && playerRef.current && playerRef.current.actions
  );
  return (
    <Player
      ref={playerRef}
      fluid={fluid}
      width={width}
      height={height}
      src={src}
    >
      <BigPlayButton position="center"></BigPlayButton>
    </Player>
  );
};

export default withTheme(VideoComponent);
