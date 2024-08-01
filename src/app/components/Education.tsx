import React from "react";
import { Box, Typography } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import CustomTabPanel from "../layout/CustomTabPanel";
import EducationComponent from "../layout/EducationCard";
import { useData } from "../context/DataContext";

export default function Education() {
  const [value, setValue] = React.useState(0);
 const educationData = useData().education;
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
    <div style={{ paddingTop: "60px", maxWidth: "1000px" }}>
      <Typography
        variant="h4"
        style={{
          display: "flex",
        }}
      >
        EDUCATION
      </Typography>
      <Box sx={{ margin: "20px" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          {educationData.map((education, index) => (
            <Tab
              key={index}
              label={education.degree_level}
              sx={{ fontSize: "16px" }}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        {educationData.map((education, index) => (
          <CustomTabPanel
            key={index}
            value={value}
            index={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <EducationComponent edu={education} />
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
}
