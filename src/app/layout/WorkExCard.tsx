import React from 'react';
import { Typography, Card, CardContent, Grid, Chip, Box, chipClasses } from '@mui/material';
import { Code as CodeIcon } from '@mui/icons-material';

const WorkExCard = ({job, index}) => {
  return (
    <Card key={index} sx={{ m: 3, }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" color="#00b4d8" fontWeight={"bold"}>{job.title}</Typography>
                <Typography variant="subtitle1" color="#00b4d8">
                  {job.company}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="body2" color="text.secondary">
                  {job.startDate} - {job.endDate}
                </Typography>
              </Grid>
            </Grid>
            {job.description.map((desc, descIndex) => (
              <Typography key={descIndex}  align= 'justify' variant="body1" sx={{ mt: 2, }}>
                {desc}
              </Typography>
            ))}
            <Box sx={{ mt: 2 }}>
              {job.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  label={skill}
                  icon={<CodeIcon />}
                  variant="outlined"
                  sx={{ mr: 1,color:"#00b4d8", mb: 1,[`& .${chipClasses.icon}`]: {
                    color:"#00b4d8"
                  } }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
  );
};

export default WorkExCard;