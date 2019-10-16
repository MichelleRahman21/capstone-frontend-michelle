import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import InstaPostForm from './InstaPost-Form'

const CreateInstaPost = ({ user }) => {
  const instapostObject = { title: '', image: '' } // URL?
  const [created, setCreated] = useState(null)
  const [instapost, setInstaPost] = useState(instapostObject)

  const handleChange = event => {
    event.persist()
    setInstaPost(instapost => ({ ...instapost, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    axios({
      method: 'POST',
      url: `${apiUrl}/instaposts`,
      data: formData,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => setCreated(res.data.instaPost._id))
      .catch(console.error)
  }
  if (created) {
    return <Redirect to={'/instaposts/'}/>
  }
  return (
    <Fragment>
      <InstaPostForm instapost={instapost} handleChange={handleChange} handleSubmit={handleSubmit} cancelPath="/"/>
    </Fragment>
  )
}

export default CreateInstaPost
