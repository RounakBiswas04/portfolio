import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import WorkExPage from "../layout/WorkExPage";
import CustomTabPanel from "./CustomTabPanel";

export default function WorkEx() {
  const [value, setValue] = React.useState(0);

  const workExpInfo = [
    {
      title: "Frontend Developer",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica and Antarctica Lizards are a widespread group of squamate reptiles,with over 6,000 species, ranging across all continents except Antarctica and Antarctica",
      duration: "Sept-2020 Jul-2022",
      location: "Benguluru,India",
      skills: ["React", "Redux", "JQuery", "Blazor"],
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <Typography variant="h4" style={{ padding: "20px" }}>
        WORK EXPERIENCE
      </Typography>
      <Box sx={{ borderColor: "divider", margin: "20px" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="WIPRO"
            sx={{ fontSize: "16px" }}
            {...a11yProps(0)}
            disableRipple
          />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <WorkExPage workExpInfo={workExpInfo} />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

