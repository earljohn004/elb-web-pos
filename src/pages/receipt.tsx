import {
  Container,
  Box,
  Typography,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import React from "react";
import ProductInfo from "./components/productinfo";
import PurchaseTable from "./components/PurchaseTable";
import ReceiptHeader from "./components/ReceiptHeader";
import ReceiptTotal from "./components/ReceiptTotal";
import SubTotal from "./components/SubTotal";

const receipt = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <Typography variant="h4"> ELB POS Receipt</Typography>
      </Box>
      <ReceiptHeader />
      <PurchaseTable />
      <ReceiptTotal />
    </Container>
  );
};

export default receipt;
