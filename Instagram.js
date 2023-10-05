import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Home from "./home";
import Homedata from "./homedata";
import Rightpage from "./Rightpage";
import useMediaQuery from "@mui/material/useMediaQuery";
import Status from "./Statuscomponent";

export default function Instagramreact() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Home />
        </Grid>
        <Grid item xs={7}>
          <Status />
          <Homedata />
        </Grid>
        <Grid item xs={3}>
          <Rightpage />
        </Grid>
      </Grid>
    </Box>
  );
}
