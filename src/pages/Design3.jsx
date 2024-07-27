import React from 'react';
import { Avatar, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const avatars = [
  { id: 1, src: 'https://via.placeholder.com/150', alt: 'User 1' },
  { id: 2, src: 'https://via.placeholder.com/150', alt: 'User 2' },
  { id: 3, src: 'https://via.placeholder.com/150', alt: 'User 3' },
  { id: 4, src: 'https://via.placeholder.com/150', alt: 'User 4' },
  { id: 5, src: 'https://via.placeholder.com/150', alt: 'User 5' },
  { id: 6, src: 'https://via.placeholder.com/150', alt: 'User 6' },
  { id: 7, src: 'https://via.placeholder.com/150', alt: 'User 7' },
  { id: 8, src: 'https://via.placeholder.com/150', alt: 'User 8' },
  { id: 9, src: 'https://via.placeholder.com/150', alt: 'User 9' },
  { id: 10, src: 'https://via.placeholder.com/150', alt: 'User 10' },
  { id: 11, src: 'https://via.placeholder.com/150', alt: 'User 11' },
  { id: 12, src: 'https://via.placeholder.com/150', alt: 'User 12' },
  { id: 13, src: 'https://via.placeholder.com/150', alt: 'User 13' },
  { id: 14, src: 'https://via.placeholder.com/150', alt: 'User 14' },
  { id: 15, src: 'https://via.placeholder.com/150', alt: 'User 15' },
];

const images = [
  { id: 1, src: 'https://via.placeholder.com/600x400', alt: 'Image 1' },
  { id: 2, src: 'https://via.placeholder.com/600x400', alt: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/600x400', alt: 'Image 3' },
];

const HorizontalScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const VerticalScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  maxHeight: '400px', 
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.paper,
  },
  [theme.breakpoints.down('sm')]: {
    scrollbarWidth: 'none', 
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

function Design3() {
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container>
      
      <HorizontalScrollContainer>
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.alt}
            sx={{ margin: 1, width: 56, height: 56 }}
          />
        ))}
      </HorizontalScrollContainer>
      <VerticalScrollContainer mt={4}>
        {images.map((image) => (
          <Box key={image.id} sx={{ margin: 1 }}>
            <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
          </Box>
        ))}
      </VerticalScrollContainer>
    </Container>
  );
}

export default Design3;
