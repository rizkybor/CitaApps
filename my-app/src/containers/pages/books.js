import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardBooks from "../../components/cards/card-components";

export default function MovieList() {
  const [ bookCategories, setBookCategories ] = useState('');

  let onChange = (e) => {
    console.log('set onChange')
    const { name, value } = e.target;
    setBookCategories({ ...setBookCategories, [name]: value });
  };

  const makeAPICall = async () => {
    try {
      const response = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall()
      //  const url = fetch(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`)
      //  const fetchData = async () => {
      //   try {
      //     const response = await fetch(url);
      //     console.log(response,'<<<<<<< RESPONSE')
      //     console.log(response.json,'<<<<<<< RESPONSE')

      //     // const json = await response.blob();
      //     // console.log(json);
      //   } catch (error) {
      //     console.log("error", error);
      //   }
      // };
      // fetchData();
  }, []);

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
            <FormLabel component="legend">Book Categories</FormLabel>
            <RadioGroup
              row
              aria-label="movies"
              name="row-radio-buttons-group"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 15,
                },
              }}
            >
              <FormControlLabel
                value="top_rated"
                control={<Radio />}
                label="Top Rated Movies"
                onChange={onChange}
              />
              <FormControlLabel
                value="upcoming"
                control={<Radio />}
                label="Upcoming Movies"
                onChange={onChange}
              />
              <FormControlLabel
                value="now_playing"
                control={<Radio />}
                label="Now Playing"
                onChange={onChange}
              />
              <FormControlLabel
                value="popular"
                control={<Radio />}
                label="Popular Movies"
                onChange={onChange}
              />
            </RadioGroup>
          </FormControl>

        </Stack>

         
        {bookCategories ? (
          <Grid container spacing={2}>
            <CardBooks />
          </Grid>
        ) : (
          <h1>
            hi, please select a book category to display the list of books here
          </h1>
        )}
      </Container>
    </main>
  );
}
