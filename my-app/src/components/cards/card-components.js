import React from "react";
// import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";

export default function CardComponents({books, loading}) {
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

 
  // console.log(props,'<<< cek props')
//   let handleClick = (id) => {
//     navigate(`/${id}`);
//   };

// {books.map((el) => (
//   <CardBooks
//     key={el.id}
//     data={el}
//     loading={loading}
//   />
//   ))}

console.log(books,'<<<< CEK BUKUNYA')
// console.log(books,'<<< loading')

if (loading){
  return <h2> Loading ... </h2>
}
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
            sm={4}
            xs={6}
            key={el.id}
          >
            <Card
              style={cardStyle}
              sx={{ maxWidth: 250 }}
            >
              
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
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
