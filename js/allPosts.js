let username = "kristoffer.a.myhre@gmail.com";
let password = "Lo4E 1tvO DpZ8 tcNM AZik QrY1";


const body = document.querySelector("body")

const fullPost = document.querySelector(".fullPost")

let hamburger = document.querySelector(".hamburger")

let navbar = document.querySelector(".navbar")

let menuOpen = false

const cardContainer = document.querySelector(".cards");
const loadMoreButton = document.querySelector(".loadMore");

const url = "https://www.caplix.no/wp-json/wp/v2/posts?_fields=author,id,content,excerpt,title,link/";

let offset = 0; 
const limit = 6; 

async function callApi() {
  const response = await fetch(url + `&offset=${offset}&per_page=${limit}`, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    })
  });

  const json = await response.json();
  console.log(json);

  const results = json;

  results.forEach(function (item) {
    if (item.id !== 11) {
      cardContainer.innerHTML += `<a class="text-color text-decoration" href="specificBlog.html?id=${item.id}">
        <h1>${item.title.rendered}</h1>
      </a>`;
    }
  });

  if (results.length < limit) {
    loadMoreButton.style.display = "none";
  }
}

function loadMore() {
  offset += limit; 
  callApi();
}

loadMoreButton.addEventListener("click", loadMore);
callApi();


hamburger.onclick = () =>{
    if (!menuOpen){
        hamburger.classList.toggle("active")
        navbar.classList.toggle("activeNav")

        menuOpen = true
    } else {
        hamburger.classList.toggle("active")
        navbar.classList.toggle("activeNav")

        menuOpen = false
    }

};
