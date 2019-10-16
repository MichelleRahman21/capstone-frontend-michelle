
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, withRouter } from 'react-router-dom' // maybe delete

const InstaPostForm = ({ instapost, handleChange, handleSubmit }) => {
  const cancelPath = instapost._id ? `#/instaposts/${instapost._id}` : '#instaposts'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="url">
        <Form.Label>Postie</Form.Label>
        <Form.Control
          type="text"
          placeholder="Url"
          name="url"
          onChange={handleChange}
          value={instapost.url}
          required
        />
        <Form.Group controlId="title">
          <Form.Label>Postie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={instapost.title}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
        <Link to={cancelPath}>
          <Button>Cancel</Button>
        </Link>
      </Form.Group>
    </Form>
  )
}

export default withRouter(InstaPostForm)
