import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/CSButton.css"

const theme = createTheme({
    palette: {
      coral: {
        main: "#C4989D",
        light: "#F2BDC3",
        dark: "#917175",
        contrastText: "#4F3E40",
      },
    },
  });

function CSButton({text, onClick}) {
    return (
        <ThemeProvider theme={theme}>
            <Button
                size="large"
                color="coral"
                variant="contained"
                onClick={onClick}
                >
                {" "}
                <div className="text_button">{text}</div>
            </Button>
        </ThemeProvider>
      )
}

export default CSButton