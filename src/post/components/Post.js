import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';


const Post = (props) => {
  return (
    <Card sx={{ minWidth: 275, margin: 3}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post