import styled from "styled-components";
import elipse from "../images/elipse.png";

const StyledElipse = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export default function Elipse(props) {
  return (
    <StyledElipse {...props}>
      <img src={elipse} alt="pinkFace" width="87px" height="87px" />
    </StyledElipse>
  );
}
