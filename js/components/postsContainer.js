import React from 'react'
import ReactDom from 'react-dom'

async function getPostData () {
  const postData = await fetch('/api/posts.json')
    .then(res => res.json())
    .then(res => res)

  return postData
}

const Post = ({posts}) => (
  <li className='post'>
    <header>
      <span className='date'></span>
      <a href='#open'><h3>{ posts }</h3></a>
      <p>Featuring Tessa, Terezka, and Richard</p>
    </header>
  </li>
)

const PostsContainer = () =>(
  <main>
    <section className='posts-container'>
      <ul>
        <Post postData='???'/>
      </ul>
    </section>
  </main>
)

export default PostsContainer
