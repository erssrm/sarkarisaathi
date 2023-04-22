import Container from '@mui/material/Container';
import { NewsCard } from 'ui';
import { CssBaseline, Grid } from '@mui/material';

export const AppContainer = () => (
  <>
    <CssBaseline />
    <Container maxWidth="md">
      <h1>Sarkari Saathi</h1>
      <h5>
        Get all information about the govermnet schemes Get all informationbout Get all information
        about the govermnet schemes Get all informationbout govermnet govermnet schemes Get all
        information about the govermnet gchemes Get all information about the govermnet schemes
      </h5>
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
  </>
);
