import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import CardMedia from "@mui/material/CardMedia";
import ImageListItem from '@mui/material/ImageListItem';

const items = []

export default function CardFavorites() {
    let dataFavorites = useSelector((state) => state.books.booksFavorites);

    useEffect(function setFavorites() {
        if(dataFavorites.length !== 0){
            items.push({...dataFavorites})
        }
    }, [dataFavorites]);

    let cardStyle = {
        marginTop: '-20px',
        width: "8vw",
        height: "auto",
        padding: "3.5%",
      };

  return (
    <div>
        {items.length > 0 ? (
             <Grid
             container
             direction="column"
             justifyContent="center"
             alignItems="center"
             sx={{
             marginTop: 10,
             }}>
             Favorite Books
             <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                     {items.map((item) => (
                         <ImageListItem key={item.id}>
                     <img
                         src={`${item.cover_url}?w=164&h=164&fit=crop&auto=format`}
                         srcSet={`${item.cover_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                         alt={item.title}
                     />
                 </ImageListItem>
             ))}
                 </ImageList>
             </Grid>
        ):(
            <div>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginTop: 10,
                        zIndex: 100
                    }}>
                      <Typography variant="h4">
                        Present :
                         </ Typography>
                    <CardMedia
                      style={cardStyle}
                      component="img"
                      height="100"
                      image="/sejuta_cita.jpeg"
                      alt="Buku Rizky"
                    />
              </Grid>
            </div>
        )}
    </div>
  )
}
