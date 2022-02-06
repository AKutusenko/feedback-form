import styled from "styled-components";
import yellowFaceDown from "../images/yellowFaceDown.png";

const StyledYellowFaceDown = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  z-index: 100;
`;

export default function YellowFaceUp(props) {
  return (
    <StyledYellowFaceDown {...props}>
      <img src={yellowFaceDown} alt="yellowFace" width="127px" height="127px" />
    </StyledYellowFaceDown>
  );
}
