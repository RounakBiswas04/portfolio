import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useData } from "../context/DataContext";
export default function Hero() {
  const { name,linkedin,github,email,hero_about,pronunciation } = useData();
  const mail = 'mailto:' + email;
  return (
    <Box
      sx={{
        display: "flex",
        py: 20,
        minHeight: "100vh",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Hey There! <br />
        I'm <span style={{color: "#00b4d8"}}>{name}{pronunciation? pronunciation : ''}</span>
      </Typography>
      <Typography variant="h6" sx={{whiteSpace: "pre-wrap"}}>
        {hero_about}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
        <Button
          href={linkedin}
          target="_blank"
          variant="contained"
        >
          LinkedIn
        </Button>
        <Button href={mail} variant="contained">
          Mail
        </Button>
        <Button
          href={github}
          target="_blank"
          variant="contained"
        >
          Github
        </Button>
      </Box>
    </Box>
  );
}
