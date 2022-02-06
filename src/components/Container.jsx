import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
