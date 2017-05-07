import React from 'react'
import ReactDom from 'react-dom'
import App from './components/siteContainer'
require('../css/main.scss')

const target = document.getElementById('app')

ReactDom.render(<App />, target)
