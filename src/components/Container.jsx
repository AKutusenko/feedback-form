import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
