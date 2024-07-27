import React, { useState } from 'react';
import { Avatar, Container, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const StyledTextField = styled(TextField)(({ isError }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: isError ? 'red' : 'green',
    },
    '&:hover fieldset': {
      borderColor: isError ? 'red' : 'green',
    },
  },
}));

function Design2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (value) => {
    setEmail(value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(!isValid);
  };

  const validatePassword = (value) => {
    setPassword(value);
    const isValid = value.length >= 6;
    setPasswordError(!isValid);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <StyledTextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          isError={emailError}
          helperText={emailError ? 'Invalid email address' : ''}
        />
        <StyledTextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          isError={passwordError}
          helperText={passwordError ? 'Password must be at least 6 characters' : ''}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Design2;
