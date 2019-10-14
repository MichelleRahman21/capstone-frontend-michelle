import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import InstaPostForm from './InstaPost-Form'

const CreateInstaPost = ({ user }) => {
  const instapostObject = { title: '', author: '' } // URL?
  const [created, setCreated] = useState(false)
  const [instapost, setInstaPost] = useState(instapostObject)

  const handleChange = event => {
    event.persist()
    setInstaPost(instapost => ({ ...instapost, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/instaposts`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { instapost }
    })
      .then(responseData => setCreated(responseData.data.instapost._id))
      .catch(console.error)
  }
  if (created) {
    return <Redirect to={`/instaposts/${created}`}/>
  }
  return (
    <InstaPostForm book={instapost} handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}

export default CreateInstaPost
