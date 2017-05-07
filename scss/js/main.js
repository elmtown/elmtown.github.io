const container = document.getElementById('app');

fetch('/api/posts.json')
  .then(res => res.json())
  .then(res => res.forEach(item => console.log(item)))
