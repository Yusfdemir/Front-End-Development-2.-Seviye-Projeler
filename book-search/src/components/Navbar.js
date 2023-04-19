import React from 'react'
import "./components.css";
import { useBook } from '../contexts/BookContext.js';

function Navbar() {
    const {setIsClicked,search,setSearch}=useBook();
  return (
    <div className='nav-container'>
        <h2>Book Search using React</h2>
        <div className="search">
            <input 
                type="text" 
                placeholder='Enter a book name or author' 
                value={search} 
                onChange={e=>setSearch(e.target.value)}
            />
            <button onClick={()=>{setIsClicked(true);}}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
  )
}

export default Navbar