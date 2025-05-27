import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const Item = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/item/${item.id}`}>
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
