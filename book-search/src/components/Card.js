import {useState} from 'react'
import { Box, Flex, Image } from '@chakra-ui/react';
import Modal from './Modal';

function Card({book}) {
  const [show,setShow]=useState(false);
  const [bookItem,setBookItem]=useState()

  return (
    <>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" marginBottom="25">
      <Box>
        <Flex align="center" width="full" justifyContent="center" flexDirection="column">
          <Image src={book.image && book.image.smallThumbnail} alt="book" loading='lazy'></Image>
          <Box mt="1"  fontWeight="semibold" as='h5' lineHeight="2">{book.title}</Box>
          <button className='card-button' onClick={()=>{setShow(true);setBookItem(book)}}>Detay</button>
        </Flex>
      </Box>
  </Box>
  <Modal show={show} item={bookItem} onClose={()=>{setShow(false)}}/>
  </>
  )
}

export default Card