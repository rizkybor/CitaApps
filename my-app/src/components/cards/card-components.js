import React from "react";
// import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";

export default function CardComponents() {
//   const { data } = props;
//   let navigate = useNavigate();

  let cardStyle = {
    marginTop: "10px",
    width: "25vw",
    height: "auto",
    borderStyle: "outset",
  };

  let cardBody = {
    textAlign: "center",
    height: "5vw",
  };

  const theme = createTheme({
    typography: {
      fontSize: 14,
    },
  });

//   let handleClick = (id) => {
//     navigate(`/${id}`);
//   };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      item
      lg={4}
      md={4}
      sm={4}
      xs={6}
      // key={""}
    >
      <Card
        style={cardStyle}
        sx={{ maxWidth: 250 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image=''
            alt="green iguana"
          />
          <CardContent style={cardBody}>
            <Typography theme={theme}> Card Books </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Release Date : 'Lorem Ipsum'
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
