import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

async function getPostData () {
  const postData = await fetch('/api/posts.json')
    .then(res => res.json())
    .then(res => res)

  return postData
}

let selectedPost = {}
let show = false

const updateSelectedPost = ({data, display}) => {
  console.log('updatedThingCalled')
  selectedPost = data
  show = display
}

const ExpandedPost = () => (
  <div id="open" className={ show ? "overlay show" : "overlay" } >
    <article className="page">
      <a href="#" className="close">x</a>
      <header>
        <section className="ep-meta">
          <span className="date">{selectedPost.shortdate}</span>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.content}</p>
        </section>
      </header>
      <section className="container info">
        <div>
          <h2>Listen</h2>
          <hr></hr>
          <h2 id="links">Links:</h2>
          <ul>
            <li>links</li>
          </ul>
          <h2 id="feed">Feed</h2>
          <hr></hr>
          <p>Feed link: feedLink</p>
          <h2 id="acknowledgtements">Acknowledgtements</h2>
          <hr></hr>
        </div>
      </section>
    </article>
  </div>
)

const LatestPost = ({ data = {} }) => (
  <li className='post latest'>
    <header>
      <h2>Latest Post</h2>
      <span className='date'>{data.shortdate}</span><br />
      <hr />
      <Link to='#open' onClick={() => updateSelectedPost({data, display: true})}><h3>{data.title}</h3></Link>
      <p></p>
    </header>
  </li>
)

const Post = ({ data = {} }) => (
  <li className='post'>
    <header>
      <span className='date'>{data.shortdate}</span>
      <Link to='#open' onClick={updateSelectedPost({data, display: true})}><h3>{data.title}</h3></Link>
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
      <ExpandedPost />
    </section>
  </main>
)

export default PostsContainer
