import React from 'react'
import ReactDom from 'react-dom'

async function getPostData () {
  const postData = await fetch('/api/posts.json')
    .then(res => res.json())
    .then(res => res)

  return postData
}

const LatestPost = ({ data = {}}) => (
  <li className='post latest'>
    <header>
      <h2>Latest Post</h2>
      <span className='date'>{data.shortdate}</span><br />
      <hr />
      <a href='#open'><h3>{data.title}</h3></a>
      <p></p>
    </header>
  </li>
)

const Post = ({ data = {} }) => (
  <li className='post'>
    {console.log(data)}
    <header>
      <span className='date'>{data.shortdate}</span>
      <a href='#open'><h3>{data.title}</h3></a>
      <p>{data.excerpt}</p>
    </header>
  </li>
)

const PostsContainer = ({ data = [] }) => (
  <main>
    <section className='posts-container'>
      <ul>
        <LatestPost data={data[0]} />
        { data.map(x => {
          if (x !== data[0]) return <Post data={x} />
        } ) }
      </ul>
    </section>
  </main>
)

export default PostsContainer
