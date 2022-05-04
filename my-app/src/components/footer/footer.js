import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Footer() {
  let data = useSelector((state) => state.books.books);
  let dataFiltering = useSelector((state) => state.books.booksByPage);

  return (
    <div>
       {data.length > 0 || dataFiltering.length > 0 ? (
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Rizky Ajie Kurniawan
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
            My Books Apps
        </Typography>
      </Box>
       ) : (
         <div> </div>
        )}
    </div>
  );
}