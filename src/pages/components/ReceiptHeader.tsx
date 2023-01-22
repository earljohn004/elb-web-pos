import { Grid, Typography, TextField } from "@mui/material";
import React from "react";

const ReceiptHeader = () => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      <Grid item xs={3}>
        <Typography variant="body1">Receipt no.</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1">ELB-001</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1"> Customer name:</Typography>
      </Grid>
      <Grid item xs={9}>
        <TextField fullWidth id="standard-basic" />
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1"> Customer address:</Typography>
      </Grid>
      <Grid item xs={9}>
        <TextField fullWidth id="standard-basic" variant="outlined" />
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1">Date:</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1">January 31, 2023</Typography>
      </Grid>
    </Grid>
  );
};

export default ReceiptHeader;
