import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  width: 557px;
  @media screen and (max-width: 480px) {
    width: 280px;
  }
  height: 189px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  padding: 21px 46px;
  &:focus {
    outline: none;
  }
  resize: none;
`;

export default function Textarea(props) {
  return <StyledTextarea {...props} />;
}
