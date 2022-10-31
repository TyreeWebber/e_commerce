import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Painting', description: "Man-of-war run a rig heave.", price: '$example', image: 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png'},
  { id: 2, name: 'Charm', description:"To go on account gunwalls galleon.", price: '$example', image: 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png'},
  { id: 3, name: 'Pendant', description :"Prow scuttle parrel provost Sail", price: '$example', image: 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png'},
];

const Products = () => {
  return (
    <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
          </Grid>
      ))}
    </Grid>
  </main>
  );
};

export default Products;