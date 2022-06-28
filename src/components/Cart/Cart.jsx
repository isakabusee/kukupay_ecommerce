import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (

                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* <CartItem /> */}
                        <div>{item.name}</div>
                    </Grid>
                        ))}
            </Grid>
            <div className={mergeClasses.cardDetails}>
                <Typography variant="h4">
                    Subtotal: { cart.subtotal.formatted_with_symbol}
                </Typography>

            </div>
        </>
    )

  return (
    <Container>
        <div  className={CallMissedSharp.toolbar} />
        <Typography className={mergeClasses.title} variant="h3">Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart