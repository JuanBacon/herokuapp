import React from 'react'
import Box from '@mui/material/Box';
import Post from '../components/Post';
const Posts =() => {
  return (
    <Box
        sx={{
            marginTop: 8,
            display: 'grid',
            flexDirection: 'row',
            alignItems: 'center',
        }}
        >
            <Post></Post>
            <Post></Post>
            <Post></Post>
    </Box>
  )
}

export default Posts;