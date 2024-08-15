import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#6f4e37" }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-center"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Espresso Emporium
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
