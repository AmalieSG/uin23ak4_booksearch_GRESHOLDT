import { useEffect, useState } from "react"

export default function Searchresults({books, setQuery}) {

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search.toLowerCase().replace(/\s+/g, '+'))
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    // -- Kontinuerlig søk --
    /*useEffect(() => {
        setQuery(search)
    }, [search, setQuery])*/

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="searchInput" placeholder="Search for a book..." value={search} onChange={handleChange} />
            <input type="submit" value="Search" />
        </form>
        </>
    )
}