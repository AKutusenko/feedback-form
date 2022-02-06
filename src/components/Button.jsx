import styled from "styled-components";

const StyledButton = styled.button`
  background: #fad34f;
  border-radius: 500px;
  width: 218px;
  height: 73px;
  cursor: pointer;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  margin-top: 23px;
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
