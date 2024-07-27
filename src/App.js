import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Design1 from './pages/Design1';
import Design2 from './pages/Design2';
import Design3 from './pages/Design3';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Zygal Assignment
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Design 1</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/design2">Design 2</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/design3">Design 3</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Design 1</Button>
            <Button color="inherit" component={Link} to="/design2">Design 2</Button>
            <Button color="inherit" component={Link} to="/design3">Design 3</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Design1 />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
      </Routes>
    </Router>
  );
}

export default App;
