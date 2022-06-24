import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import  useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes', price: 'TSh 5', image: 'https://footwearnews.com/wp-content/uploads/2020/03/jordan-melo-m12-at2863_100_a_prem-e1585057459733.jpg'},
//     { id: 2, name: 'Macbook', description: 'Apple macbook', price: 'TSh 10', image: 'https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg?q=x_0,y_0,h_2268,w_4030,c_fill/h_720,w_1280'},
// ];

const Products = ({ products }) => {
    const classes = useStyles();
    return (

    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )

}

export default Products;