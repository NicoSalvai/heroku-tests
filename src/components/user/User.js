import {
  Container,
  Button,
  CssBaseline,
  Typography,
  Chip,
} from "@mui/material";

export default function User(props) {
    
  function handleLogOut(event) {
    event.preventDefault();
    props.setUserInfo(null);
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
      <Typography component="h1" variant="h5" textAlign="center">
        Usuario: {props.userInfo.username}
      </Typography>
      <Typography component="div" variant="subtitle1">
        {props.userInfo.roles.map((el) => (
          <Chip label={el} variant="outlined" key={el} />
        ))}
      </Typography>
      <Button
        type="submit"
        color="error"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleLogOut}
        href="#"
      >
        Cerrar Sesion
      </Button>
    </Container>
  );
}
