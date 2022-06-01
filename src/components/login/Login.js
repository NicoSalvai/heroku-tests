import React from "react";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Link,
  CssBaseline,
  Avatar,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function Login(props) {
  const [account, setAccount] = React.useState({ username: "", password: "" });

  function handleAccountChange(event) {
    setAccount({ ...account, [event.target.id]: event.target.value });
  }

  function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData();

    for (const name in account) {
      formData.append(name, account[name]);
    }

    return fetch("https://nico-salvai-test-backend.herokuapp.com/api/auth", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setTokens(data);
        props.setUserInfo(data);
      })
      .catch((error) => console.log(error));
  }

  function setTokens(user) {
    sessionStorage.setItem("user_tokens", JSON.stringify(user));
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifiContent: "center",
      }}
    >
      <CssBaseline />

      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

      <Typography component="h1" variant="h5" textAlign="center">
        Iniciar Sesion
      </Typography>

      <Box
        component="form"
        onSubmit={handleLogin}
        noValidate
        sx={{ mt: 1, gap: 1 }}
      >
        <TextField
          required
          id="username"
          label="Username"
          placeholder="Username"
          onChange={handleAccountChange}
          value={account.username}
          fullWidth
          autoFocus
          sx={{ mt: 1, mb: 1 }}
          autoComplete="username"
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          onChange={handleAccountChange}
          value={account.password}
          fullWidth
          sx={{ mt: 1, mb: 1 }}
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked value="remember" color="primary" />}
          label="Recuerdame"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Iniciar Sesion
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" underline="hover" color="gray">
              Olvido su contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" underline="hover" color="gray">
              {"No tiene cuenta? Registrese"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
