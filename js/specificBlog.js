let username ="kristoffer.a.myhre@gmail.com";
let password ="Lo4E 1tvO DpZ8 tcNM AZik QrY1";

const cardContainer = document.querySelector(".cards")

const body = document.querySelector("body")

const fullPost = document.querySelector(".fullPost")

let hamburger = document.querySelector(".hamburger")

let navbar = document.querySelector(".navbar")

let menuOpen = false

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id =  params.get("id");

const url ="https://www.caplix.no/wp-json/wp/v2/posts/?include=" + id;

async function callApi(){
    const response = await fetch(url,{
        method: 'GET',
        headers: new Headers({
          'Authorization': 'Basic ' + btoa(username + ":" + password)
        })
      })
      const json = await response.json();


        fullPost.innerHTML += `<div class= "text-color">    
        <h1>${json[0].title.rendered}</h1>
        <h4>${json[0].content.rendered}</h4>
        </div>
       `;

       console.log(json)

};

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
