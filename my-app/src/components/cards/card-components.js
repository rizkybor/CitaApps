import React from "react";
// import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";

export default function CardComponents({books}) {
  let cardStyle = {
    marginTop: "10px",
    width: "200vw",
    height: "auto",
    padding: "3.5%"
  };

  let cardBody = {
    textAlign: "center",
    height: "3vw",
  };

  const theme = createTheme({
    typography: {
      fontSize: 14,
    },
  });

  return (
    <div>
       <Grid container spacing={2}>
        {books.map((el) => (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            lg={4}
            md={4}
            sm={5}
            xs={6}
            key={el.id}
          >
            
            <Card
              style={cardStyle}
              sx={{
                    maxWidth: 250,
                    boxShadow: 10
                  }}
            >
              
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={el.cover_url}
                  alt="green iguana"
                />
                <CardContent style={cardBody}>
                  <Typography theme={theme}> {el.title} </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Authors : {el.authors}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
   </div>
  );
}
