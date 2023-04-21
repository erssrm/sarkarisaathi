import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";

export const NewsCard = () => {
  return (
    <Box>
      <Card sx={{ backgroundColor: "#FFFFFF" }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <CardContent>
              <img src="https://picsum.photos/id/55/200" alt="not available" />
            </CardContent>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pradhan Mantri Jan Dhan Yojana (PMJDY)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pradhan Mantri Jan Dhan Yojana (PMJDY) is a financial inclusion
                scheme launched by the Indian government in August 2014. The
                scheme aims to provide financial services to the unbanked and
                underbanked population of India. Here are some details about the
                scheme:
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Read More</Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
      <Paper elevation={4} />
    </Box>
  );
};
