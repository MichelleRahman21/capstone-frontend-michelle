import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'

const InstaPost = (props) => {
  const [instapost, setInstaPost] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/instaposts/${props.match.params.id}`)
      .then(res => setInstaPost(res.data.instapost))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/instaposts/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!instapost) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Postie succesfully deleted!' } }
    } />
  }

  return (
    <div>
      <h4>{instapost.title}</h4>
      <button onClick={destroy}>Delete Movie</button>
      <Link to={`/instaposts/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/instaposts">Back to all your posties!</Link>
    </div>
  )
}

export default InstaPost
