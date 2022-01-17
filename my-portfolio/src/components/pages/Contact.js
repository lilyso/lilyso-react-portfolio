import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Container,
  Button,
  Text,
  Box
} from "@chakra-ui/react";
import validator from "validator";

export default function Contact() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Perfecto");
    } else {
      setEmailError("Please enter a valid email");
    }
  };
  return (
    <>
    <Box mx={4} >
      <Container mt={8}>
        <Text fontSize="lg">
          Want to know more about my experience and projects? Get in touch
          today.
        </Text>
      </Container>
      <Container mt={8}>
        <form>
          <FormControl my={4} isRequired>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input variant="flushed" id="first-name" />
          </FormControl>
          <FormControl my={4}>
            <FormLabel htmlFor="last-name">Last name</FormLabel>
            <Input variant="flushed" id="last-name" />
          </FormControl>
          <FormControl my={4} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              variant="flushed"
              id="email"
              onChange={(e) => validateEmail(e)}
            />{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {emailError}
            </span>
          </FormControl>
          <FormControl my={4} isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea variant="flushed" placeholder="Write your message here" />
          </FormControl>
          <Button mt={4} id="submitButton">
            Submit
          </Button>
        </form>
      </Container>
      </Box>
    </>
  );
}
