import React from 'react'
import header from './header'
import latestPostContainer from './latestPostContainer'
import footer from './footer'

const siteContainer = () => (
  <div>
    { header }
    { latestPostContainer }
    { footer }
  </div>
)

module.exports = React.createElement(siteContainer)
