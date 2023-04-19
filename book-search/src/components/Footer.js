import React from 'react'
import { Box, Flex, Grid, Image, Link, } from '@chakra-ui/react';

function Footer() {
  return (
    <Box >
        <Flex align="center" width="full" justifyContent="center" >
            <h2>Created By : <a href="https://github.com/Yusfdemir">Yusuf DEMİR</a></h2>
        </Flex>
        <Grid templateColumns='repeat(3, 1fr)'>
            <Box>
                <Flex align="center" width="full" justifyContent="center" flexDirection="column" >
                    <Image width={300} height={200} src='https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2014/01/BookPreview.jpg'/> 
                    <Link href='https://tympanus.net/codrops/2014/01/14/look-inside-book-preview-with-bookblock/'><h4>Book Preview</h4></Link>
                </Flex>     
            </Box>
            <Box>
                <Flex align="center" width="full" justifyContent="center" flexDirection="column" >
                    <Image width={300} height={200} src='https://pbs.twimg.com/card_img/1644247183221223426/WvG3uTyd?format=png&name=medium'/> 
                    <Link href='https://react.dev/'><h4>React Js</h4></Link>
                </Flex>     
            </Box> 
            <Box>
                <Flex align="center" width="full" justifyContent="center" flexDirection="column" >
                    <Image width={300} height={200} src='https://apilist.fun/images/social/api/google-books.png'/> 
                    <Link href='https://developers.google.com/books/?hl=en'><h4>Google Books API</h4></Link>
                </Flex>     
            </Box> 
            
        </Grid>
    </Box>
  )
}

export default Footer