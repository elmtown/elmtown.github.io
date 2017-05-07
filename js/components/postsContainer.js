import React from 'react'
import ReactDom from 'react-dom'

async function getPostData () {
  const postData = await fetch('/api/posts.json')
    .then(res => res.json())
    .then(res => res)

  return postData
}

const Post = ({data = {}}) => (
  <li className='post'>
    <header>
      <span className='date'></span>
      <a href='#open'><h3></h3></a>
      <p></p>
    </header>
  </li>
)

const PostsContainer = ({ data = [] }) => (
  <main>
    <section className='posts-container'>
      <ul>
        { data.map(x => <Post data=({x}) />) }
      </ul>
    </section>
  </main>
)

export default PostsContainer
