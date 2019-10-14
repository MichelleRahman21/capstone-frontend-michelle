import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

const Books = ({ user, alerts }) => {
  const [books, setBooks] = useState(null)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/books/`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setBooks(responseData.data.books))
      .catch(console.error)
  }, [])

  const booksJsx = books.map(book => (
    <p key={book._id}>
      <Link to={`/books/${book._id}`}>Title:{book.title}</Link>
    </p> // mongo uses _id instead of .id
  ))
  return (

    <Fragment>
      <h1>Books</h1>
      {booksJsx}
    </Fragment>
  )
}

export default Books
