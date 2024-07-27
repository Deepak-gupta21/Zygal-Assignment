import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Container, Box } from '@mui/material';

function CarouselSlide({ item }) {
  return (
    <Paper>
      <img src={item.image} alt={item.name} style={{ width: '100%' }} />
      <h2>{item.name}</h2>
    </Paper>
  );
}

function Design1() {
  const items = [
    {
      name: "Slide 1",
      image: "https://via.placeholder.com/800x300"
    },
    {
      name: "Slide 2",
      image: "https://via.placeholder.com/800x300"
    },
    {
      name: "Slide 3",
      image: "https://via.placeholder.com/800x300"
    }
  ];

  return (
    <Container>
      <Carousel
        indicators={true}
        indicatorIconButtonProps={{
          style: {
            color: 'rgba(0, 0, 0, 0.6)' 
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'rgba(0, 0, 0, 1)' 
          }
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '10px', 
          }
        }}
      >
        {items.map((item, index) => (
          <CarouselSlide key={index} item={item} />
        ))}
      </Carousel>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert('Button clicked!')}
        >
          Static Button
        </Button>
      </Box>
    </Container>
  );
}

export default Design1;
