// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    //create header
    let headerContainer = document.querySelector(".header-container");
    let headerDiv = document.createElement("div");
    headerDiv.classList.add(".header");


    //create date span
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = "March 28, 2019";

    //create h1

    let headerTitle = document.createElement("h1");
    headerTitle.textContent = "Lambda Times";

    //create temp span
    let tempSpan = document.createElement("span");
    tempSpan.textContent = "98";
    tempSpan.classList.add("temp");


    //put it together
    headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(tempSpan);

    return headerContainer;
}

Header();
