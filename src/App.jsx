import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Bookcard from './components/Bookcard'
import Searchresults from './components/Searchresults'

function App() {

  const [query, setQuery] = useState("james+bond")
  const [currentId, setCurrentId] = useState("")
  const [books, setBooks] = useState([])

  const fetchBooks = async(query) => {
    fetch(`https://openlibrary.org/search.json?title=${query}`)
    .then(response => response.json())
    .then(data => setBooks(data.docs))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    if (query.length >= 3) {
      fetchBooks(query)
    } else {
      setBooks([])
    }
  },[query])

  console.log(query)

  return (
    <>
    <header>
      <h1>Book Search</h1>
    </header>
    <main>
        <Searchresults books={books} setQuery={setQuery} />
        <Bookcard books={books}/>
    </main>
    <footer>Arbeidskrav 4: Boksøk 2024</footer>
    </>
  )
}

export default App
