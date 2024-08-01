import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
export default function WorkExPage({ workExpInfo }) {
  return (
    <div>
      <Box
        sx={{
          maxWidth: 900,
          p: 5,
          pt: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {workExpInfo.map((e) => (
          <div key={e.title}>
            <Typography variant="h5">
              {" "}
              {e.title} <span style={{ fontSize: "16px" }}>{e.duration}</span>
            </Typography>
            <Typography variant="h6">{e.location}</Typography>

            <Typography
              sx={{ pl: 3, pt: 1, textAlign: "justify" }}
              variant="body1"
            >
              {e.desc}
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                pb: 2,
                flexWrap: "wrap",
              }}
            >
              {e.skills.map((skill) => (
                <ListItem sx={{ width: "auto" }} key={skill}>{skill}</ListItem>
              ))}
            </List>
          </div>
        ))}
      </Box>
    </div>
  );
}

