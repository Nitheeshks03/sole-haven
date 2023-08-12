import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";
import ErrorAlert from "../components/ErrorAlert";
import Success from "../components/Success";

const MODAL_STYLES = {
  position: "fixed",
  height: "500px",
  width: "500px",
  borderRadius: "5px",
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

export default function RegisterScreen({ handleRegisterClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleRegisterSuccess = () => {
    setRegisterSuccess(true);
  };

  const handleErrorAlert = () => {
    setErrorAlert(true);
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        handleErrorAlert();
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      handleRegisterSuccess();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  
  return (
    <>
      {errorAlert && <ErrorAlert message="Registration failed" />}
      {registerSuccess && <Success message="Registration successful" />}
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
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          handleRegister={handleRegister}
        />
      </div>
    </>
  );
}

function RegisterModal({
  email,
  password,
  setEmail,
  confirmPassword,
  setConfirmPassword,
  setPassword,
  name,
  setName,
  handleRegister,
}) {
  return (
    <>
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
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Button fullWidth mt="xl" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </Paper>
      </Container>
    </>
  );
}
