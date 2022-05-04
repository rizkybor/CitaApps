import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

export default function Header() {
 
  return (
    <div>
      <AppBar 
        position="relative"
        color="primary"
        >
        <Toolbar>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
          <Typography variant="h6" color="inherit" noWrap>
            Online Test Sejuta Cita
          </Typography>
          </ Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}