import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Book = ({ user, alerts, match }) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setBook(responseData.data.book))
      .catch(console.error)
  }, [])

  if (!book) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Books</h1>
      <p>Title:{book.title}</p>
      <Button href={`#/books/${match.params.id}/edit`}>Edit</Button>
    </div>
  )
}

export default withRouter(Book)
