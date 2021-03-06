import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page6 from "./pages/Page6";

const theme = createTheme({
  palette: {
    primary: {
      main: "#040a4f",
      // main: "#de5d21",
    },
  },
  // https://github.com/mui/material-ui/issues/19584
  // MuiButton: {
  //   styleOverrides: {
  //     root: {
  //       lineHeight: 0,
  //     },
  //   },
  // },
});

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Provider store={store}>
            <main>
              <Routes>
                <Route path="/" element={<Page1 />} exact />
                <Route path="/page_2" element={<Page2 />} exact />
                <Route path="/page_3" element={<Page3 />} exact />
                <Route path="/page_4" element={<Page4 />} exact />
                <Route path="/page_6" element={<Page6 />} exact />
              </Routes>
            </main>
          </Provider>

          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
