export default function Bookcard({books}){

    const handleAmazonSearch = (amazonId, isbn) => {
        let search

        if (amazonId !== undefined && amazonId[0] !== "") {
            search = amazonId[0]
        } else if (isbn !== undefined && isbn !== 0) {
            search = isbn[0]
        } else {
            console.error("AmazonId and ISBN is undefined or empty")
        }
        window.open(`https://www.amazon.com/s?k=${search}`, '_blank')
    }

    return (
        <>
        <section>
            {books.map(book => (
                <article className="bookcard" key={book.key}>
                    <h3>{book.title}</h3>
                    {book.first_publish_year && <p>First publish year: {book.first_publish_year}</p>}
                    {book.author_name && <p>Author/s: {book.author_name.join(', ')}</p>}
                    {book.ratings_average && <p>Average rating: {book.ratings_average}</p>}

                    {/* Kilde til hvordan en knapp sender bruker til en link ved trykk: https://stackoverflow.com/questions/5025941/is-there-a-way-to-get-a-button-element-to-link-to-a-location-without-wrapping */}
                    <button onClick={() => handleAmazonSearch(book.id_amazon, book.isbn)}>Click here to find on amazon</button>
                </article>
            ))}
        </section>

        </>
    )
}