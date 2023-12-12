import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function InputFileUpload({ onChange }) {
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setIsImageUploaded(true);
          onChange(e);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Button component="label" 
                    style={{width:'100%'}}
                    variant="contained" 
                    size="medium" 
                    color="coral" 
                    startIcon={<CloudUploadIcon/>}
            >
                <div className="text_button">
                    {isImageUploaded ? 'Image uploaded' : 'Upload image'}
                </div>
                <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
            </Button>
        </ThemeProvider>
    );
}
