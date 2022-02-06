import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export default function Label(props) {
  return <StyledLabel {...props} />;
}
