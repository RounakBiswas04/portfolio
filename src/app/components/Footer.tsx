import { OpenInNew } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
export default function Footer() {
  return (
    <Box
      sx={{
        mt: 5,
        borderTop: "1px solid gray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="body2"
        style={{
          display: "flex",
          padding: "20px",
          color: "gray",
        }}
      >
        {/* View the code on GitHub */}
        {/* <Button
          component="a"
          rel="noopener noreferrer"
          target="_blank"
          // href="https://github.com/srinivasveerla/Portfolio" //change link
          style={{
            textTransform: "none", // Preserve text casing
            marginLeft: "5px", // Adjust spacing between text and button
            padding: 0, // Remove padding to integrate with text flow
            minWidth: "auto", // Allow button to size based on content
            color: "inherit", // Inherit text color from parent Typography
          }}
        >
          <OpenInNew fontSize="small" />
        </Button> */}
      </Typography>

      <Typography
        variant="body2"
        style={{
          display: "flex",
          padding: "20px",
          color: "gray",
        }}
      >
        Designed and developed by - Srinivas Veerla and Rounak Biswas
      </Typography>
    </Box>
  );
}
