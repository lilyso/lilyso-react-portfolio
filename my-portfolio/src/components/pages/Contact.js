import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Container>
      <form>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">First name</FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="last-name">Last name</FormLabel>
          <Input id="last-name" placeholder="Last name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea placeholder="Write your message here" />
        </FormControl>
        <Button mt={4} id="submitButton">
          Submit
        </Button>
      </form>
    </Container>
  );
}

// function handleSubmit(e) {
//   e.preventDefault();
//   if
// }
