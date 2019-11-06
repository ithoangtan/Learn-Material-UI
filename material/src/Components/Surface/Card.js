import React, { Component } from "react";
import {
   Card,
   CardHeader,
   Avatar,
   IconButton,
   CardMedia,
   CardContent,
   Typography,
   CardActions,
   Collapse,
   MuiThemeProvider
} from "@material-ui/core";

import clsx from "clsx";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import styles from "./styles";
//This is important for config theme.spacing..... in styles
import { withStyles } from "@material-ui/core/styles";

import pealla from "./paella.jpg";

class CardProduct extends Component {
   state = {
      expanded: false
   };
   handleExpandClick = () => {
      this.setState({
         expanded: !this.state.expanded
      });
   };

   render() {
      const { expanded } = this.state;
      const { classes } = this.props;
      return (
         // Need MuiThemeProvider for theme.transition in styles
         <MuiThemeProvider>
            <Card className={classes.card}>
               <CardHeader
                  avatar={
                     <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                     </Avatar>
                  }
                  action={
                     <IconButton aria-label="settings">
                        <MoreVertIcon />
                     </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
               />
               <CardMedia
                  className={classes.media}
                  image={pealla}
                  title="Paella dish"
               />
               <CardContent>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     This impressive paella is a perfect party dish and a fun
                     meal to cook together with your guests. Add 1 cup of frozen
                     peas along with the mussels, if you like.
                  </Typography>
               </CardContent>
               <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                     <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                     <ShareIcon />
                  </IconButton>
                  <IconButton
                     className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                     })}
                     onClick={this.handleExpandClick}
                     aria-expanded={expanded}
                     aria-label="show more"
                  >
                     <ExpandMoreIcon />
                  </IconButton>
               </CardActions>
               <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                     <Typography paragraph>Method:</Typography>
                     <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                     </Typography>
                     <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                     </Typography>
                     <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don’t open.)
                     </Typography>
                     <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                     </Typography>
                  </CardContent>
               </Collapse>
            </Card>
         </MuiThemeProvider>
      );
   }
}

export default withStyles(styles)(CardProduct);
