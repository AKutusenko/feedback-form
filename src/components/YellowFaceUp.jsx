import styled from "styled-components";
import yellowFaceUp from "../images/yellowFaceUp.png";

const StyledYellowFaceUp = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  border-radius: 50%;
`;

export default function YellowFaceUp(props) {
  return (
    <StyledYellowFaceUp {...props}>
      <img src={yellowFaceUp} alt="yellowFace" width="89px" height="86px" />
    </StyledYellowFaceUp>
  );
}
