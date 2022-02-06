import styled from "styled-components";
import map from "../images/map.jpg";

const StyledYellowFaceUp = styled.div`
  position: absolute;
  left: 814px;
`;

export default function YellowFaceUp(props) {
  return (
    <StyledYellowFaceUp {...props}>
      <img src={map} alt="map" width="976px" height="976px" />
    </StyledYellowFaceUp>
  );
}
