import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            CyberCommerce
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/category/electronica">
            Electrónica
          </Button>
          <Button color="inherit" component={Link} to="/category/ropa">
            Ropa
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contacto
          </Button>
        </Box>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
