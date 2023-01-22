import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  styled,
  TableCell,
  tableCellClasses,
  autocompleteClasses,
} from "@mui/material";
import React from "react";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const createData = (
  description: string,
  quantity: number,
  unitPrice: number,
  subTotal: number
) => {
  return { description, quantity, unitPrice, subTotal };
};

const rows = [
  createData("Product A", 999, 123, 2223),
  createData("Product B", 999, 123, 2223),
  createData("Product C", 999, 123, 2223),
  createData("Product D", 999, 456, 672223),
  createData("Product E", 999, 789, 2344),
  createData("Product E", 999, 789, 2344),
];

const PurchaseTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ overflow: "scroll", maxHeight: "200px" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Unit Price</StyledTableCell>
            <StyledTableCell align="right">Subtotal</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.description}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.unitPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.subTotal}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PurchaseTable;
