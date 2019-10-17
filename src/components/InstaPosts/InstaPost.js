import React, { useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const imageStyle = {
  width: '270px',
  height: '270px'
}

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
  // create another button instead of link for back to posties
  // maybe line 44 is the one that i dont need in order to get only one displayed
  return (
    <div>
      <h1>Posties</h1>
      <h4>Description: {instapost && instapost.title}</h4>
      <img style={imageStyle} src={instapost && instapost.url}/>
      <a className="btn btn-outline-dark mr-2" href={`#/instaposts/${match.params.id}/edit`}>Edit</a>
      <button className="btn btn-outline-dark mr-2" onClick={destroy}>Delete</button>
      <Link to="/instaposts">Back to all Posties</Link>
    </div>
  )
}

export default withRouter(InstaPost)