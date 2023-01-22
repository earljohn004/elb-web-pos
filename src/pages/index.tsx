import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";

export default function Test() {
  return (
    <Container disableGutters>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <Button fullWidth variant="contained">
          Sales Person
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <Button fullWidth variant="contained">
          Cashier
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ margin: 3 }}>
        <Button fullWidth variant="contained">
          Admin
        </Button>
      </Box>
    </Container>
  );
}
