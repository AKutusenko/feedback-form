import styled from "styled-components";
import { ReactComponent as Linkedin } from "../images/Linkedin.svg";
import { ReactComponent as Twitter } from "../images/Twitter.svg";
import { ReactComponent as Facebook } from "../images/Facebook.svg";
import { ReactComponent as Pinterest } from "../images/Pinterest.svg";

const StyledList = styled.ul`
  display: flex;
  margin-left: 335px;
  margin-top: 73px;
`;

const StyledItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #FAD34F;
  }
}
`;

export default function SocialIcons() {
  return (
    <StyledList>
      <StyledItem>
        <StyledLink href="">
          <Linkedin />
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink href="">
          <Twitter />
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink href="">
          <Facebook />
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink href="">
          <Pinterest />
        </StyledLink>
      </StyledItem>
    </StyledList>
  );
}
