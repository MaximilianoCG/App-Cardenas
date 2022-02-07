import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ data }) => {
  return (
    <Card style={{margin: 40}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;

/* import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function MediaCard() {

  function onAdd(){
    console.log("Se agrego un producto al carrito")
  }
  return (
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
  );
} */

