import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

const InstaPosts = props => {
  const [instaposts, setInstaPosts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/instaposts/`)
      .then(res => setInstaPosts(res.data.instaPosts))
      .catch(console.error)
  }, [])

  const instapostsJsx = instaposts.map(instapost => (
    <p key={instapost._id}>
      <Link to={`/instaposts/${instapost._id}`}>Postie:{instapost.title}</Link>
    </p>
  ))
  console.log(instaposts)

  return (

    <div>
      <h1>Posties</h1>
      {instapostsJsx}
    </div>
  )
}

export default InstaPosts
