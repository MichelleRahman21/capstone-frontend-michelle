import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

const InstaPosts = ({ user, alerts }) => {
  const [instaposts, setInstaPosts] = useState(null)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/instaposts/`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setInstaPosts(responseData.data.instaposts))
      .catch(console.error)
  }, [])

  const instapostsJsx = instaposts.map(instapost => (
    <p key={instapost._id}>
      <Link to={`/instaposts/${instapost._id}`}>Postie:{instapost.title}</Link>
    </p> // mongo uses _id instead of .id
  ))
  return (

    <Fragment>
      <h1>Posties</h1>
      {instapostsJsx}
    </Fragment>
  )
}

export default InstaPosts
