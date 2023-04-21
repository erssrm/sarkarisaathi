import React from "react";
import Container from "@mui/material/Container";
import { NewsCard } from "ui";
import { CssBaseline, Grid } from "@mui/material";

export const AppContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>Sarkari Saathi</h1>
        <h5>Get all information about the govermnet schemes</h5>
        <Grid container spacing={3}>
          <Grid item>
            <NewsCard />
          </Grid>
          <Grid item>
            <NewsCard />
          </Grid>
          <Grid item>
            <NewsCard />
          </Grid>
          <Grid item>
            <NewsCard />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
