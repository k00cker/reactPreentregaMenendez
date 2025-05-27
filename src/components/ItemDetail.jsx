import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ item }) => {
  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CardMedia component="img" image={item.image} alt={item.title} />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              {item.description}
            </Typography>
            <Typography variant="h6">${item.price}</Typography>
            <ItemCount item={item} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ItemDetail;
