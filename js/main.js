import React from 'react'
import ReactDom from 'react-dom'
import siteContainer from './components/siteContainer'
require('../css/main.scss')

const target = document.getElementById('app')

fetch('/api/posts.json')
  .then(res => res.json())
  .then(res => res.forEach(item => console.log(item)))

ReactDom.render(siteContainer, target)
