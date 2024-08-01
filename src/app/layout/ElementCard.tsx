import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
export default function ElementCard({
  type,
  title,
  img,
  listElements,
  description,
  gitUrl,
  demoUrl,
}) {
  const width = type == "project" ? 700 : 400;
  const height = type == "project" ? 400 : 500;
  return (
    <Card
      sx={{ maxWidth: width, maxHeight: height, borderRadius: 5, boxShadow: 5 }}
    >
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain" }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
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
          {listElements.map((element) => (
            <ListItem
              sx={{
                width: "auto",
                color: "primary.light",
                "&:hover": { color: "primary.main" },
              }}
            >
              {element}
            </ListItem>
          ))}
        </List>
      </CardContent>
      {type == "project" ? (
        <CardActions>
          <Button size="small">Github</Button>
          <Button size="small">Demo</Button>
        </CardActions>
      ) : null}
    </Card>
  );
}

