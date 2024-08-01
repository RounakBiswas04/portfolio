import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { useData } from "../context/DataContext";
import DOMPurify from 'dompurify';

export default function About() {
  const about = DOMPurify.sanitize(useData().about_me);
  return (
    <div style={{ paddingTop: "70px" }}>
      <Typography
        variant="h4"
        style={{
          paddingBottom: "30px",
          display: "flex",
        }}
      >
        ABOUT ME
      </Typography>
      <Grid container spacing={1.5} style={{ alignItems: "center" }}>
        <Grid item xs md={7}>
          <Typography
            variant="body1"
            align="justify"
            style={{
              minWidth: "300px",
              whiteSpace: "pre-wrap",
            }}
            dangerouslySetInnerHTML={{ __html: about }}
          >
          </Typography>
        </Grid>
        <Grid
          item
          xs
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card elevation={3}>
            <CardMedia
              sx={{ height: 300, width: 200 }}
              image="/images/about.jpg"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
