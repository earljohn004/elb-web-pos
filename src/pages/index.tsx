import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";

export default function Test() {
  return (
    <Container disableGutters>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ marginTop: 40, marginLeft: 3, marginRight: 3 }}
      >
        <Button href="/sales" fullWidth sx={{ height: 50 }} variant="contained">
          Sales Person
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <Button
          href="/cashier"
          fullWidth
          sx={{ height: 50 }}
          variant="contained"
        >
          Cashier
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <Button
          href="receipt"
          fullWidth
          sx={{ height: 50 }}
          variant="contained"
        >
          Admin
        </Button>
      </Box>
    </Container>
  );
}
