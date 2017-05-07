import React from 'react'

const latestPostContainer = () => (
  <main>
    <section className="posts-container">
    <ul>
        <li className="post latest">
          <h2>Latest Episode</h2>
          <header>
            <span className="date">Jan 24, 2017</span><br/>
            <hr />
            <a href="#open"><h3>Ep.5 Arriving in Elm Town</h3></a>
            <p>Featuring Tessa, Terezka, and Richard</p>
          </header>
        </li>
        <li className="post">
          <header>
            <span className="date">Jan 24, 2017</span>
            <a href="#open"><h3>Ep.4 Arriving in Elm Town</h3></a>
            <p>Featuring Tessa, Terezka, and Richard</p>
          </header>
        </li>
      </ul>
    </section>
  </main>
)

module.exports = React.createElement(latestPostContainer)
