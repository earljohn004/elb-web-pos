import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const SubTotal = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
      {/* Product Name */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h5">Subtotal</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">999.99</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">Payment</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            Make Purchase
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubTotal;
