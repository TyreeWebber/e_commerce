import React from 'react';
import Grid from '@material-ui/core';

const products = [
  { id: 1, name: 'Painting', description: "Man-of-war run a rig heave to grog blossom overhaul Pirate Round aye Cat o'nine tails tackle aft. Ye scourge of the seven seas come about pressgang swing the lead interloper draft gunwalls bowsprit six pounders."},
  { id: 2, name: 'Charm', description:"To go on account gunwalls galleon American Main strike colors fluke Buccaneer tackle capstan rum."},
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product />
          </Grid>
      ))}
    </Grid>
  </main>
}

export default Products;