import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const InstaPost = ({ user, alerts, match }) => {
  const [instapost, setInstaPost] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/instaposts/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setInstaPost(responseData.data.book))
      .catch(console.error)
  }, [])

  if (!instapost) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Posties</h1>
      <p>Title:{instapost.title}</p>
      <Button href={`#/instaposts/${match.params.id}/edit`}>Edit</Button>
    </div>
  )
}

export default withRouter(InstaPost)
