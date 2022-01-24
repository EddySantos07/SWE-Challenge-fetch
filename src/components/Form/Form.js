import React, { useState, useEffect } from "react";

import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

const Form = () => {
  const [listOccupations, setOccupations] = useState("");
  const [listStates, setStates] = useState("");

  const [currentOccupation, setCurrentOccupation] = useState("");
  const [currentState, setCurrentState] = useState("");

  const handleOccupationChange = (event) => {
    setCurrentOccupation(event.target.value);
  };

  const handleStateChange = (event) => {
    setCurrentState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // for (let i = 0; i < event.target.length; i++) {
    //     console.log(event.target[i].value, "valuee");
    // }

    const data = new FormData(event.target);

    const name = data.get("FullName");
    const email = data.get("Email");
    const password = data.get("password");
    const occupation = data.get("occupation");
    const state = data.get("state");

    const formData = {
      name,
      email,
      password,
      occupation,
      state,
    };
    console.log(formData);

    axios
      .post("https://frontend-take-home.fetchrewards.com/form", formData)
      .then((response) => {
        console.log("this is response", response);
      });
  };

  useEffect(async () => {
    const data = await axios.get(
      "https://frontend-take-home.fetchrewards.com/form"
    );

    const { occupations, states } = data.data;
    setOccupations(occupations);

    setStates(states);
  }, []);

  return (
    <>
      <Box>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            maxHeight: 600,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack justifyContent="center" alignItems="center" spacing={3}>
              <TextField
                required
                label="Required"
                id="outlined-required-name"
                label="Full Name"
                name="FullName"
              />

              <TextField
                required
                label="Required"
                id="outlined-required-email"
                label="Email"
                name="Email"
              />

              <TextField
                required
                label="Required"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
              />

              <TextField
                required
                label="Required"
                id="outlined-select-occupation"
                select
                label="Select"
                value={currentOccupation}
                onChange={handleOccupationChange}
                helperText="Please select your occupation"
                name="occupation"
              >
                {Array.isArray(listOccupations)
                  ? listOccupations.map((option, indx) => (
                      <MenuItem key={indx} value={option}>
                        {option}
                      </MenuItem>
                    ))
                  : null}
              </TextField>

              <TextField
                required
                label="Required"
                id="outlined-select-state"
                select
                label="Select"
                value={currentState}
                onChange={handleStateChange}
                helperText="Please select your state"
                name="state"
              >
                {Array.isArray(listStates)
                  ? listStates.map((state, indx) => (
                      <MenuItem key={indx} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))
                  : null}
              </TextField>
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Form;
