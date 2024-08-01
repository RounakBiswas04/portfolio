import React from "react";
import { Grid, Typography } from "@mui/material";
import ElementPage from "../layout/SkillsPage";
import AnimatedSection from "../animations/AnimatedSection";

export default function Skills() {
  const skills = {
    Languages: [
      { name: "Python" },
      { name: "Javascript" },
      { name: "C#" },
      { name: "Golang" },
      { name: "Typscript" },
      { name: "HTML/CSS" },
    ],
    Frontend: [
      { name: "React" },
      { name: "Redux" },
      { name: "JQuery" },
      { name: "Blazor" },
    ],
    Backend: [{ name: "Django" }, { name: ".NET" }],
  };

  return (
    <div
      style={{
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        SKILLS
      </Typography>
      <Grid
        container
        gap={3}
        style={{
          display: "flex",
          maxWidth: "1000px",
          justifyContent: "center",
          padding: "20px",
          paddingTop: "0px",
        }}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        {Object.keys(skills).map((el) => (
          <Grid
            item
            md
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={el}
          >
            <AnimatedSection>
              <ElementPage title={el} ListElements={skills[el]} />
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

