import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";

const ProductInfo = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
      {/* Product Name */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body1">Product Name</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">2x2 Square Tube</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">Price</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">100</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">SubTotal</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">123.455</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">Quantity</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-number"
            label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid item xs={12}>
            <Button fullWidth variant="contained">
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductInfo;
