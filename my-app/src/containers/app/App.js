import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/index"
import { indigo } from '@mui/material/colors';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: indigo[700],
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      textAlign: 'center',
      fontSize: '1rem',
      color: indigo[700],
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    }
  },
});

export default class App extends Component {
  render(){
  return (
      <ThemeProvider theme={theme}>
        <Header />
          <div className="App">
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        <Footer />
      </ThemeProvider>
    );
  }
}
