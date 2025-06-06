import Grid from "@mui/material/Grid";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
