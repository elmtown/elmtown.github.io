import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {slugify, decodeEntities} from '../utils'


class SingleView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {}
    }

    this.markup = this.markup.bind(this)
  }

  componentWillMount(){
    console.log('id', this.props.match.params.id)
    const post = this.context.store.posts.find(item => slugify(item.title) === this.props.match.params.id)
    this.setState({post})
  }

  markup() {
    const {post} = this.state
    return { __html: decodeEntities(post.content) };
  }

  render() {
      const {post} = this.state
      return(
        <div id="open" className="overlay">
          <article className="page">
            <a href="/" className="close">x</a>
            <header>
              <section className="ep-meta">
                <span className="date">{post.shortdate}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </section>
            </header>
            <section className="container info">
              <div dangerouslySetInnerHTML={this.markup()}></div>
            </section>
          </article>
        </div>
    )
  }
}

SingleView.contextTypes = {
  store: PropTypes.object
}

export default SingleView
