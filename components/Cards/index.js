// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



let cardContainer = document.querySelector(".cards-container");

function populateArticle() {
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
        .then(response => {
            console.log("It works!!!!!");
            console.log(response);
            let writeArticle = response.data.articles;
            writeArticle.javascript.forEach(article => {
                createArticle(article);
            })//end forEach
            writeArticle.bootstrap.forEach(article => {
                createArticle(article);
            }) //end forEach
            writeArticle.jquery.forEach(article => {
                createArticle(article);
            })//end forEach
            writeArticle.node.forEach(article => {
                createArticle(article);
            })//end forEach
            writeArticle.technology.forEach(article => {
                createArticle(article);
            })
            return writeArticle;

        })
        .catch(err => console.log(err));
}//end populate article

populateArticle();

function createArticle(info) {
    //create card
    let card = document.createElement("div");
    card.classList.add("card");

    //create headline
    let cardHeadline = document.createElement("div");
    cardHeadline.classList.add("headline");
    cardHeadline.textContent = info.headline;

    //create author info
    let cardAuthor = document.createElement("div");
    cardAuthor.classList.add("author");

    //create img-container and image
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    let cardImage = document.createElement("img");
    cardImage.src = info.authorPhoto;

    //author name span
    let authorName = document.createElement("span");
    authorName.textContent = info.authorName;
    //put it together

    cardContainer.appendChild(card);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    imgContainer.appendChild(cardImage);
    cardAuthor.appendChild(authorName);

    //return it
    return card;
}
