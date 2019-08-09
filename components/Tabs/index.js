// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let tabContainer = document.querySelector(".tabs");
function createTab() {
    axios.get("https://lambda-times-backend.herokuapp.com/topics")
        .then(response => {
            console.log("Woohoo!")
            console.log(response);
            let newTab = response.data.topics.forEach(element => {
                aNewTab(element);
            })//forEach
            return newTab;
        })//end then
        .catch(err => console.log(err));
};//end createTab

function aNewTab(obj) {
    let newDiv = document.createElement("div");
    newDiv.textContent = obj; 
    //newDiv.classList.add("tab");
    newDiv.classList.add("tab");
    tabContainer.appendChild(newDiv);
    return newDiv;       
}



createTab();