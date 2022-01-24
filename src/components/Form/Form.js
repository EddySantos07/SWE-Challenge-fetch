import React, { useState, useEffect } from "react";

import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

import TextField from "@mui/material/TextField";

const Form = () => {
  const [occupations, setOccupations] = useState(null);
  const [states, setStates] = useState(null);

  const [currentOccupation, setCurrentOccupation] = useState(null);
  const [currentState, setCurrentState] = useState(null);

  const handleOccupationChange = (event) => {
    setCurrentOccupation(event.target.value);
  };

  const handleStateChange = (event) => {
    setCurrentState(event.target.value);
  };

  useEffect(async () => {
    const { occupation, state } = await axios.get(
      "https://frontend-take-home.fetchrewards.com/form"
    );

    setOccupations(occupation);

    setStates(state);
  });

  return (
    <>
      <Box component="form">
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            maxHeight: 600,
          }}
        >
          <Stack justifyContent="center" alignItems="center" spacing={3}>
            <TextField
              required
              id="outlined-required-name"
              label="Required"
              defaultValue="Full Name Here"
            />

            <TextField
              required
              id="outlined-required-email"
              label="Required"
              defaultValue="Email"
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <TextField
              id="outlined-select-occupation"
              select
              label="Select"
              //   value={currency}
              onChange={handleOccupationChange}
              helperText="Please select your occupation"
            >
              {/* {occupations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
            </TextField>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Form;
