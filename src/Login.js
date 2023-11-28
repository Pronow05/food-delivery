
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function Login() {
  let navigate = useNavigate()

  const handleSubmit = async (e) => {

    //localStorage.setItem('token', false)
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const response = await fetch("http://localhost:5000/api/loginuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data.get('email'), password: data.get('password') })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //localStorage.removeItem('token')
      //localStorage.setItem('token', true)
      navigate("/")
      

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
        
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor : "#0e1111" }}
            >
              Login
            </Button>
            <Grid container>
              
              <Grid item>
              <Link to="/createuser">Don't have an account? Signup</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    
  );
}