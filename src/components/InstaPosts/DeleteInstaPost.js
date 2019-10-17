import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const InstaPost = (props) => {
  const [instapost, setInstaPost] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/instaposts/${props.match.params.id}`)
      .then(res => setInstaPost(res.data.instaPost))
      .catch(console.error)
  }, [])

  if (!instapost) {
    return <p> If you are seeing this, your postie has been removed</p>
  }
  return (
    <div>
      <h4>{instapost.title}</h4>
    </div>
  )
}

export default withRouter(InstaPost)
