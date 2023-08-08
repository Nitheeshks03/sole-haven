/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";


export default function Register({ handleRegisterClose, isRegisterOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const MODAL_STYLES = {
    position: "fixed",
    height: "500px",
    width: "500px",
    borderRadius:'5px',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
  };
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(42, 102, 152, 0.7)",
    zIndex: 1000,
  };
  return (
         isRegisterOpen && (
            <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
              <button
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={handleRegisterClose}
              >
                &times;
              </button>
              <RegisterModal
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
              />
            </div>
            </>
            )
    
    );
}


function RegisterModal({
  email,
  password,
  setEmail,
  confirmPassword,
  setConfirmPassword,
  setPassword,
}) {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `VT323, ${theme.fontFamily}`,
          fontWeight: 400,
        })}
      >
        Start Your Journey Here
      </Title>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        <TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          label="Confirm password"
          placeholder="Your password"
          required
          mt="md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button fullWidth mt="xl" type="submit">
          Register
        </Button>
      </Paper>
    </Container>
  );
}
