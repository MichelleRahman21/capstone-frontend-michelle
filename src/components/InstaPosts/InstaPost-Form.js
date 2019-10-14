
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const InstaPostForm = ({ instapost, handleChange, handleSubmit }) => {
  const cancelPath = instapost._id ? `#/instaposts/${instapost._id}` : '#instaposts'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Post</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={instapost.title}
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
          value={instapost.author}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="secondary" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default InstaPostForm
