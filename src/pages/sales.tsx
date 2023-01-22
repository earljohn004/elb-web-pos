import {
  Box,
  Container,
  FilledInput,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ReactSearchBox from "react-search-box";
import React from "react";
import ProductInfo from "./components/productinfo";
import PurchaseTable from "./components/PurchaseTable";
import SubTotal from "./components/SubTotal";

const sales = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <TextField
          fullWidth
          id="outlined-search"
          label="Search Product"
          type="search"
        />
      </Box>
      <ProductInfo />
      <PurchaseTable />
      <SubTotal />
    </Container>
  );
};

export default sales;
