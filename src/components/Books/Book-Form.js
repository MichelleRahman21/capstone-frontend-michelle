
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BookForm = ({ book, handleChange, handleSubmit }) => {
  const cancelPath = book._id ? `#/books/${book._id}` : '#books'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={book.title}
          required
        />
      </Form.Group>
      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleChange}
          value={book.author}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="secondary" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default BookForm
