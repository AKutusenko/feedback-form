import styled from "styled-components";
import blueFace from "../images/blueFace.png";

const StyledBlueFace = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  z-index: 99;
`;

export default function YellowFaceUp(props) {
  return (
    <StyledBlueFace {...props}>
      <img src={blueFace} alt="pinkFace" width="79px" height="97px" />
    </StyledBlueFace>
  );
}
