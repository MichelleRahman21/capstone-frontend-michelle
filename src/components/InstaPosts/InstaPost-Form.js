
import React from 'react'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom' // maybe delete

const InstaPostForm = ({ instapost, handleChange, handleSubmit }) => (

  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="image" encType="multipart/form-data">
      <Form.Label>Postie</Form.Label>
      <Form.Control
        type="file"
        name="image"
        onChange={handleChange}
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
      <button className="btn btn-outline-dark mr-2" type="submit">Submit</button>
    </Form.Group>
  </Form>
)

export default withRouter(InstaPostForm)
