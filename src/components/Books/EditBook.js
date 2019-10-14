import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import BookForm from './Book-Form'

const EditBook = ({ user, match, alert, history }) => {
  const [book, setBook] = useState({ title: '', author: '' })

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

  const handleChange = event => {
    event.persist()
    setBook(book => ({ ...book, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { book }
    })
      .then(() => alert({ heading: 'Success', message: 'You updated a book !', variant: 'success' }))
      .then(() => history.push(`/books/${match.params.id}`))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }
  return (
    <BookForm
      book={book}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`/books/${match.params._id}`}
    />
  )
}

export default withRouter(EditBook)
