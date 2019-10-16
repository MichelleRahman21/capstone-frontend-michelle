import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const InstaPost = ({ user, match, alert }) => {
  const [instapost, setInstaPost] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/instaposts/${match.params.id}`,
      headers: {
        'Authorization': `Bearer${user.token}`
      }
    })
      .then(responseData => setInstaPost(responseData.data.instaPost))
      .then(() => console.log(instapost))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/instaposts/${match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (deleted) {
    return <Redirect to={{ pathname: '/instaposts' }} />
  }

  return (
    <div>
      <h1>Posties</h1>
      <h4>Postie: {instapost && instapost.title}</h4>
      <Button className="btn btn-outline-dark mr-2" href={`#/instaposts/${match.params.id}/edit`}>Edit</Button>
      <button className="btn btn-outline-dark mr-2" onClick={destroy}>Delete</button>
      <Link to="/instaposts">Back to all Posties</Link>
    </div>
  )
}

export default withRouter(InstaPost)
