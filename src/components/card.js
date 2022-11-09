import axios from "axios";

const Card = (article) => {
  // TASK 5

  //Object.values(obj)
  //.flat()
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //create all elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');

  //add classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  //set attributes
  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  span.textContent = article.authorName;

  //append to the DOM
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(image);
  author.appendChild(span);
  imgContainer.appendChild(image);

  //add event
  card.addEventListener('click', () => {
    console.log(headline.textContent);
  })

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/articles')
  .then(({data}) => {
    const articles = Object.values(data.articles).flat()
    const container = document.querySelector(selector)
    articles.forEach(article => container.appendChild(Card(article)))
  })
}

export { Card, cardAppender }
