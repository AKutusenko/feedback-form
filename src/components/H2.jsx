import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  margin-bottom: 30px;
  margin-top: 0;
`;

export default function H2(props) {
  return <StyledH2 {...props} />;
}
