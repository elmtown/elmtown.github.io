import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Switch} from 'react-router'
import Header from './header'
import PostsContainer from './postsContainer'
import SingleView from './singlePostView'
import Footer from './footer'

class Provider extends Component {

  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  getChildContext(){
    return {
      store: this.props.store
    }
  }

  render(){
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount () {
    fetch('/api/posts.json')
    .then(response => response.json())
    .then(response => this.setState({posts: response}))
  }

  render () {
    return (
      <Provider store={this.state}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={PostsContainer}/>
              <Route path="/post/:id" component={SingleView}/>
              <Route component={() => "404"}/>
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
