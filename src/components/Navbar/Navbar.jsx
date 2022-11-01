import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/placeholder';

const Navbar = () => {
  return (
    <>
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit">
          <img src={logo} alt="Kirsten Maloney" height="25px" className={classes.image} />
          Kirsten Maloney
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Show Items in Cart" color="inherit">
            <Badge badgeContent={3} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar