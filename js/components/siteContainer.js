import React, { Component } from 'react'
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
      <div>
        <Header />
        <PostsContainer data={this.state.posts}/>
        <Footer />
      </div>
    )
  }
}

export default App
