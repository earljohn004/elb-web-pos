import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ReceiptTotal = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
      {/* Product Name */}
      <Grid container justifyContent="right" spacing={2}>
        <Grid item justifyContent="right" xs={8}>
          <Typography variant="h5">Subtotal</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">999.99</Typography>
        </Grid>
        <Grid item justifyItems="right" xs={8}>
          <Typography variant="h5">Payment</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">123.45</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="fullWidth" />
        </Grid>

        <Grid item justifyContent="right" xs={8}>
          <Typography variant="h5">Change</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">123.45</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button sx={{ marginBottom: 1 }} fullWidth variant="contained">
            Save
          </Button>
          <Button color="error" fullWidth variant="contained">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReceiptTotal;
