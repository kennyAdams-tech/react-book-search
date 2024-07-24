import React, { useState } from 'react'
import './book.css'
import Card from './Card'
import axios from 'axios'
import logo from '../assets/react.svg'

const Book = () => {
    const [search, setSearch] = useState('')
    const [bookData, setBookData] = useState([])
    console.log(bookData)

    const SearchBook = (e) => {
        e.preventDefault()
        
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&download=epub&key=AIzaSyB9GgLRZwvpxPtzojJ-CmACoCnIoiJj3qI&maxResults=10`)
        .then( res => setBookData(res.data.items))
        .catch(err => console.log(err))

        setSearch('')
    }
        

  return (
    <div  className='container'>
        <div className="heading"> Built with React <img src={logo} alt="react logo"/> By Adams Kenny</div>
        <h2>Find your Books Here</h2>
        <form onSubmit={SearchBook}>
            <input type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
        <div className="output">
            <Card data={bookData}/>
        </div>
    </div>
  )
}

export default Book