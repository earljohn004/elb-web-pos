import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Container,
  Button,
} from "@mui/material";
import React from "react";
import { StyledTableCell, StyledTableRow } from "./components/PurchaseTable";

const createData = (purchaseOrder: string, subTotal: number) => {
  return { purchaseOrder, subTotal };
};

const rows = [
  createData("Purchase Order A", 999),
  createData("Purchase Order B", 999),
  createData("Purchase Order C", 999),
];

const cashier = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ overflow: "scroll", maxHeight: "200px" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Purchase Order</StyledTableCell>
                <StyledTableCell align="left">Amount</StyledTableCell>
                <StyledTableCell align="left" />
                <StyledTableCell align="left" />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.purchaseOrder}>
                  <StyledTableCell component="th" scope="row">
                    {row.purchaseOrder}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.subTotal}</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained"> View</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button color="error" variant="contained">
                      {" "}
                      Delete{" "}
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default cashier;
