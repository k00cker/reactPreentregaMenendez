import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        ¡Página no encontrada!
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Ir al inicio
      </Button>
    </Box>
  );
};

export default NotFound;
