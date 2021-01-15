
import axios from "axios"

axios.get("https://lambda-times-api.herokuapp.com/articles")
  
.then(response => {
  const {bootstrap, javascript, jquery, node, technology} = response.data.articles
  const array = [...bootstrap, ...javascript, ...jquery, ...node, ...technology]
  // console.log(array) 
  array.forEach(articles => {
      document.querySelector(".cards-container").appendChild(Card(articles))
  })    
})
.catch(error => {
  console.log(error.message)
})


const Card = (article) => {
 
  const divCard = document.createElement("div")
  divCard.setAttribute("class", "card")
  divCard.addEventListener("click", () => console.log(article.headline))

  const divHeadline = document.createElement("div")
  divHeadline.setAttribute("class", "headline")
  divHeadline.textContent = article.headline
  divCard.appendChild(divHeadline)

  const divAuthor = document.createElement("div")
  divAuthor.setAttribute("class", "author")
  divCard.appendChild(divAuthor)

  const divImg = document.createElement("div")
  divImg.setAttribute("class", "img-container")
  divAuthor.appendChild(divImg)

  const img = document.createElement("img")
  img.setAttribute("src", article.authorPhoto)
  divImg.appendChild(img)

  const span = document.createElement("span")
  span.textContent =` By ${article.authorName}`

  divAuthor.appendChild(span)

  return divCard
}

const cardAppender = (selector) => {
  
  axios.get("https://lambda-times-api.herokuapp.com/articles")
		.then((response) => {
      document.querySelector(selector).appendChild(Card(response.data.articles));
      // console.log(response.data.articles);
		})
		.catch(error => {
			console.log(error.message);
		});
}

export { Card, cardAppender }


 // TASK 5
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
// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
