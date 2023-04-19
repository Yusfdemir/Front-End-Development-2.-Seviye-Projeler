import React from 'react'
import { Box, Grid } from '@chakra-ui/react';
import { useBook } from '../contexts/BookContext.js';
import Card from './Card.js';

function Content() {
    const{books}=useBook();
  return (
    <div className='content'>
        
        <Grid templateColumns='repeat(4, 1fr)'>
            {
                books.map((book)=>(
                    <React.Fragment key={book.key} > 
                        <Box w="100%" key={book.key}>
                            <Card book={book}/>
                        </Box>       
                    </React.Fragment>
                ))
            }
        </Grid>
    </div>
  )
}

export default Content