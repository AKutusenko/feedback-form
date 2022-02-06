import styled from "styled-components";
import Form from "./Form";
import YellowFaceUp from "./YellowFaceUp";
import YellowFaceDown from "./YellowFaceDown";
import PinkFace from "./PinkFace";
import Elipse from "./Elipse";
import Map from "./Map";
import background from "../images/background.jpg";

const StyledMain = styled.div`
  position: relative;
  width: 1440px;
  height: 928px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function Main() {
  return (
    <StyledMain>
      <Form />
      <YellowFaceUp top="23px" left="29px" />
      <YellowFaceDown top="520px" right="551px" />
      <PinkFace top="604px" right="420px" />
      <Elipse top="21px" left="714px" />
      <Map />
    </StyledMain>
  );
}
