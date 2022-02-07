import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Textarea from "./Textarea";
import H2 from "./H2";

const StyledForm = styled.div`
  position: absolute;
  left: 147px;
  top: 179px;
`;

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <Label>
          <H2>Reach out to us!</H2>
          <Input
            type="text"
            name="name"
            placeholder="Your name*"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={handleChange}
            value={name}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your e-mail*"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            onChange={handleChange}
            value={email}
          />
          <Textarea
            type="text"
            name="message"
            placeholder="Your message*"
            required
            onChange={handleChange}
            value={message}
          />
        </Label>
        <Button type="submit">Send message</Button>
      </form>
    </StyledForm>
  );
}
