import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import BookForm from './Book-Form'

const CreateBook = ({ user }) => {
  const bookObject = { title: '', author: '' }
  const [created, setCreated] = useState(false)
  const [book, setBook] = useState(bookObject)

  const handleChange = event => {
    event.persist()
    setBook(book => ({ ...book, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/books`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { book }
    })
      .then(responseData => setCreated(responseData.data.book._id))
      .catch(console.error)
  }
  if (created) {
    return <Redirect to={`/books/${created}`}/>
  }
  return (
    <BookForm book={book} handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}

export default CreateBook
