import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataBooks, getDataBooksByPage } from "../../store/actions/books";
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "../../components/pagination/pagination"
import CardBooks from "../../components/cards/card-components";
import CardFavorites from "../../components/cards/card-favorites";


export default function BookList() {
  const [ bookCategories, setBookCategories ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ postPerPage, setPostPerPage ] = useState(10)
  const [ currentCategories, setCurrentCategories ] = useState('');


  const dispatch = useDispatch();
  let data = useSelector((state) => state.books.books);
  let dataFiltering = useSelector((state) => state.books.booksByPage);

  let onChange = (e) => {
    if(dataFiltering.length > 0){
      dispatch(getDataBooksByPage(e.target.value, 1, 0));
    } 
    dispatch(getDataBooks(e.target.value));
    setCurrentCategories(e.target.value)
  };

  useEffect(function setCategories() {
      fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories', )
     .then((response) => response.json())
     .then((json) => {
       setBookCategories(json)
     })
     .catch((err) => {
       alert(err.message)
     });
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentBooks = data.slice(indexOfFirstPost, indexOfLastPost)

  let cardStyle = {
    marginTop: "10px",
    width: "15vw",
    height: "auto",
    padding: "3.5%",
  };

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >   
          <FormControl component="fieldset">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel component="legend">Book Categories</FormLabel>
              <RadioGroup
                row
                aria-label="books"
                name="row-radio-buttons-group"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 15,
                  },
                }}
              >
                {bookCategories.map((el) => (
                <div key={el.id} data={el} >
                    <FormControlLabel
                        value={el.id}
                        control={<Radio />}
                        label={el.name}
                        onChange={onChange}
                      />
                  </ div>
                ))}
              </RadioGroup>
            </ Grid>
          </FormControl>
        </Stack>
              
        {data.length > 0 && dataFiltering.length > 0 ? (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <CardBooks
                  books={dataFiltering}
                />
                <br />
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <CardBooks
                books={currentBooks}
              />
              <br />
            </Grid>
          </Grid>
        </div>
        )}
        <br></br>
        <br></br>
            {data.length > 0 || dataFiltering.length > 0 ? (
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                  <Pagination
                    postPerPage={currentBooks.length} 
                    totalPost={data.length}
                    categories={currentCategories}
                  />
                </Grid>
                  ) : (
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      marginTop: 10,
                    }}
                >
                  <Typography variant="h1">
                    Hii.. Welcome to My Apps
                  </ Typography>
                  <Typography variant="h4">
                    "select a category above to display book pages based on the selected category"
                    </Typography>
                  <CardMedia
                      style={cardStyle}
                      component="img"
                      height="300"
                      image="/book.jpg"
                      alt="Buku Rizky"
                    />
                  </Grid>
              )}
          <br></br>
          <br></br>
        <CardFavorites />
      </Container>
    </main>
  );
}
