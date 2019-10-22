import React, { useState, useEffect, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import InstaPostForm from './InstaPost-Form'

const EditInstaPost = ({ user, match, alert, history }) => {
  const [instapost, setInstaPost] = useState({ title: '', url: [] })
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/instaposts/${match.params.id}`)
      .then(res => setInstaPost(res.data.instaPost))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setInstaPost(instapost => ({ ...instapost, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    // formData.append(match.params.id)
    axios({
      method: 'PATCH',
      url: `${apiUrl}/instaposts/${match.params.id}`,
      contenType: false,
      processData: false,
      data: formData,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })

      .then(() => setUpdated(true))
      .then(() => alert({ heading: 'Success', message: 'You updated a post!', variant: 'success' }))
      .then(() => history.push(`/instaposts/${match.params.id}`))
      .catch(() => alert({ heading: 'This is not your postie, you can only edit or delete yours', message: 'Sorry', variant: 'danger' }))
  }
  if (updated) {
    return <Redirect to={`/instaposts/${match.params.id}`}/>
  }

  return (
    <Fragment>
      <InstaPostForm
        instapost={instapost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/instaposts/${match.params._id}`}
      />
    </Fragment>
  )
}

export default withRouter(EditInstaPost)
