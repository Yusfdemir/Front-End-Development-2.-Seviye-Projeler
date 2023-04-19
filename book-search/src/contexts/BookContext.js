import { createContext,useContext,useEffect,useState,useCallback } from "react";
import axios from "axios";

const BookContext=createContext();
//.env dosyasından API_KEY değerini çekince sonuna ';' karakteri ekliyordu mesela API_KEY:123456 ise process.env.REACT_APP_API_KEY bana 123456; sonucu dönüyordu ondan dolayı sonucu stringe çevirip son karakteri slice metodu ile sildim 
const API_KEY=(process.env.REACT_APP_API_KEY).toString().slice(0,-1);

export const BookProvider=({children})=>{
    
    const [search,setSearch]=useState("");
    const [isClicked,setIsClicked]=useState(false)
    const [books,setBooks]=useState([])

    const fetchBooks=useCallback(async()=>{

        try{
            const {data}= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
            if(data.items){
                const filteredBooks=data.items.map((bookItem)=>{
                    return{
                        key:bookItem.id,
                        description:bookItem.volumeInfo.description,
                        title:bookItem.volumeInfo.title,
                        authors:bookItem.volumeInfo.authors,
                        publisDate:bookItem.volumeInfo.publishedDate,
                        link:bookItem.volumeInfo.previewLink,
                        image:bookItem.volumeInfo.imageLinks
                    }
                })
                setBooks(filteredBooks)    
            }else{
                setBooks([])
            }
        }
        catch(e){
            console.log(e)
        }    
    },[search])

    useEffect(()=>{
        fetchBooks();    
        setIsClicked(false)
        setSearch("");
    },[isClicked])
    
    const values={search,setSearch,setIsClicked,books}
    
    return <BookContext.Provider value={values}>{children}</BookContext.Provider>
}

export const useBook=()=> useContext(BookContext);