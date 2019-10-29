import React from 'react'

const layoutStyles = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space between',
    alignItems: 'center',
    alignContent: 'center',
    top: '0',
    left: '0',
    zIndex: '-5000'
  }
}

const Home = props => {
  return (
    <main style={layoutStyles.main}>
      <img src="https://i.imgur.com/9tbmG7j.png" />
    </main>
  )
}

export default Home
