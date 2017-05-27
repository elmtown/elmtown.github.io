import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './header'
import PostsContainer from './postsContainer'
import Footer from './footer'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount () {
    fetch('/api/posts.json').then(response => response.json()).then(response => this.setState({posts: response}))
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <PostsContainer data={this.state.posts}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
