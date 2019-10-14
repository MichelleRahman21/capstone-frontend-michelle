import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import InstaPostForm from './InstaPost-Form'

const EditInstaPost = ({ user, match, alert, history }) => {
  const [instapost, setInstaPost] = useState({ title: '', author: '' })

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

  const handleChange = event => {
    event.persist()
    setInstaPost(instapost => ({ ...instapost, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/instaposts/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { instapost }
    })
      .then(() => alert({ heading: 'Success', message: 'You updated a post!', variant: 'success' }))
      .then(() => history.push(`/instaposts/${match.params.id}`))
      .catch(() => alert({ heading: 'Sorry', message: 'Something went wrong', variant: 'danger' }))
  }
  return (
    <InstaPostForm
      book={instapost}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`/instaposts/${match.params._id}`}
    />
  )
}

export default withRouter(EditInstaPost)
