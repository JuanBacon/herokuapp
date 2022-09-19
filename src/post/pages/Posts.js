import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios'
import Post from '../components/Post';
const Posts =() => {

    const [data, setData] = useState(null);

    useEffect(() => {
    axios 
    .get(
        'https://waco-api.herokuapp.com/api/posts'
    )
    .then((res) => {setData(res.data.data)})
    .catch(error => error)
    }, [])
    
  return (
    <Box
        sx={{
            marginTop: 8,
            display: 'grid',
            flexDirection: 'row',
            alignItems: 'center',
        }}
        >   
            {data && data.map((item, index) => {
                return <Post key={index} title={item.title} body={item.body}></Post>
            })} 
    </Box>
  )
}

export default Posts;