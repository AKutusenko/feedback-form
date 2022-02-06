import styled from "styled-components";
import pinkFace from "../images/pinkFace.png";

const StyledPinkFace = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  z-index: 99;
`;

export default function YellowFaceUp(props) {
  return (
    <StyledPinkFace {...props}>
      <img src={pinkFace} alt="pinkFace" width="214px" height="208px" />
    </StyledPinkFace>
  );
}
