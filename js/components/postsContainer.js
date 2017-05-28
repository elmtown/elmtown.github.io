import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {slugify} from '../utils'

const LatestPost = ({ data = { title: '' } }) => (
  <li className='post latest'>
    <Link to={`/post/${slugify(data.title)}`}>
      <header>
        <h2>Latest Post</h2>
        <span className='date'>{data.shortdate}</span><br />
        <hr />
        <h3>{data.title}</h3>
      </header>
    </Link>
  </li>
)

const Post = ({ data = {} }) => (
  <li className='post'>
    <Link to={`/post/${slugify(data.title)}`}>
      <header>
        <span className='date'>{data.shortdate}</span>
        <h3>{data.title}</h3>
        <p>{data.excerpt}</p>
      </header>
    </Link>
  </li>
)

class PostsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    this.setState({posts: this.context.store.posts})
  }

  render() {
      const {posts} = this.context.store
      return(
      <main>
        <section className='posts-container'>
          <ul>
            <LatestPost data={posts[0]} />
            { posts.map((data, index) => <Post data={data} key={index} /> ) }
          </ul>
        </section>
      </main>
    )
  }
}

PostsContainer.contextTypes = {
  store: PropTypes.object
}

export default PostsContainer
