import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  width: ${({ width }) => width || "557px"};
  height: ${({ height }) => height || "93px"};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  padding: 21px 46px;
  &:focus {
    outline: none;
  }
  // &:not(:last-child) {
  margin-bottom: 5px;
  // }
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
