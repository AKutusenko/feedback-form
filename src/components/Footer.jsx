import styled from "styled-components";
import PinkFace from "./PinkFace";
import YellowFaceUp from "./YellowFaceUp";
import BlueFace from "./BlueFace";
import SocialIcons from "./SocialIcons";

const StyledFooter = styled.div`
  position: relative;
  height: 202px;
  background: #fafafa;
  border-top: 1px solid #d8d8d8;
  overflow: hidden;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <PinkFace top="0" left="62px" />
      <YellowFaceUp top="65px" right="-20px" />
      <BlueFace top="0" right="128px" />
      <SocialIcons />
    </StyledFooter>
  );
}
