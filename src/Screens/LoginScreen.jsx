import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";


function LoginScreen({ handleLoginClose, isLoginOpen}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const MODAL_STYLES = {
    position: "fixed",
    height: "500px",
    width: "500px",
    borderRadius: "5px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
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
   
    isLoginOpen && (
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
            onClick={handleLoginClose}
        >
          &times;
        </button>

        <LoginModal
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>
      </>
    )
   
  );
}

export default LoginScreen;

function LoginModal({ email, setEmail, password, setPassword}) {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `VT323, ${theme.fontFamily}`,
          fontWeight: 400,
        })}
      >
        Welcome back!
      </Title>
      <Text
        size="sm"
        align="center"
        mt={5}
        sx={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        Do not have an account yet?
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
          backgroundColor: "transparent",
        }}
      >
        <TextInput
          label="Email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Group position="apart" mt="lg">
          <Checkbox
            label="Remember me"
            
          />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
