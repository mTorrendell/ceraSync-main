import React, { useEffect, useState } from "react";
import "./styles/Subscription.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { subscribe, 
         selectIsSuccess, 
         selectIsError, 
         selectErrorMsg, 
         setIsSuccess, 
         setErrorEmail } from "../redux/slices/emailSlice";

import { TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CSButton from "./common/CSButton";
import { isEmailValid } from "../util/FormValidators";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#C4989D",
            "--TextField-brandBorderHoverColor": "#F2BDC3",
            "--TextField-brandBorderFocusedColor": "#917175",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "4px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "4px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "4px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const Subscription = () => {
  const [email, setEmail] = useState("");

  const outerTheme = useTheme();
  const dispatch = useDispatch();

  const isSuccess = useSelector(selectIsSuccess);
  const isError   = useSelector(selectIsError);
  const errorMsg  = useSelector(selectErrorMsg);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
        if (isEmailValid(email)) {
            await dispatch(subscribe( { email: email })).unwrap();
            setEmail('');
        } else {
            toast.error("Email is invalid");
        }
    } catch {
        toast.error("Failed to subscribe");
    }
  }

  useEffect(() => {
    if (isSuccess) {
        toast.success("Subsribed successfully!");
        dispatch(setIsSuccess(undefined));
    } 
    if (isError) {
        toast.error(`Unable to subscribe: ${errorMsg}`);
        dispatch(setErrorEmail({isError: false, errorMsg:""}));
    }
  }, [isSuccess, isError, errorMsg]);

  return (
    <div className="another-container">
    <div className="container d-flex justify-content-center">
      <div className="outerContainer m-6 subscribe center">
        <h3 className="col-12 bold">
          Want to be updated about new events? Subscribe for our newsletter!
        </h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend"></div>

          <ThemeProvider theme={customTheme(outerTheme)}> 
            <div className="input-container">
                    <TextField
                    className="event-text-field"
                    required
                    fullWidth
                    label="Email"
                    variant="filled"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleInputChange}
                    />
                </div>
          </ThemeProvider>
        </div>
      </div>

    </div>
    <div className="another-button-container">
      <CSButton 
          className="button_width" 
          text={"SUBSCRIBE"} 
          onClick={handleSubscribe}>
      </CSButton>
      </div>
      </div>
  );
};

export default Subscription;
