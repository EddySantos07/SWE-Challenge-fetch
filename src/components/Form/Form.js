import React, { useState, useEffect } from "react";

import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

import TextField from "@mui/material/TextField";

const Form = () => {
  const [listOccupations, setOccupations] = useState("");
  const [listStates, setStates] = useState("");

  const [currentOccupation, setCurrentOccupation] = useState("");
  const [currentState, setCurrentState] = useState("");

  const handleOccupationChange = (event) => {
    console.log(event.target.value, "target value");
    setCurrentOccupation(event.target.value);
  };

  const handleStateChange = (event) => {
    setCurrentState(event.target.value);
  };

  useEffect(async () => {
    const data = await axios.get(
      "https://frontend-take-home.fetchrewards.com/form"
    );

    const { occupations, states } = data.data;
    console.log(occupations, states);
    setOccupations(occupations);

    setStates(states);
  }, []);

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
              value={currentOccupation}
              onChange={handleOccupationChange}
              helperText="Please select your occupation"
            >
              {Array.isArray(listOccupations)
                ? listOccupations.map((option, indx) => (
                    <MenuItem key={indx} value={option}>
                      {option}
                    </MenuItem>
                  ))
                : null}
            </TextField>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Form;
