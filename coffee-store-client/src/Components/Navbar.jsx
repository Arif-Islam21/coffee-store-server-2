import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SiCoffeescript } from "react-icons/si";

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
            <div className="flex justify-center gap-2 items-center">
              <SiCoffeescript />
              <span className="font-rancho font-bold">Espresso Emporium</span>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
