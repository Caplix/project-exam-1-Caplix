let username ="kristoffer.a.myhre@gmail.com";
let password ="Lo4E 1tvO DpZ8 tcNM AZik QrY1";

const contentContainer = document.querySelector(".content")

const body = document.querySelector("body")


let hamburger = document.querySelector(".hamburger")

let navbar = document.querySelector(".navbar")

let menuOpen = false

const carousel = document.querySelector(".carousel")

const slider = document.querySelector(".slider")

const previous = document.querySelector(".carousel-button-prev")

const next = document.querySelector(".carousel-button-next")

const slideWidth = slider.clientWidth;




const url ="https://www.caplix.no/wp-json/wp/v2/posts?_fields=author,id,content,excerpt,title,link/";

async function callApi(){
    const response = await fetch(url,{
        method: 'GET',
        headers: new Headers({
          'Authorization': 'Basic ' + btoa(username + ":" + password)
        })
      })
      const json = await response.json();

      console.log(json)

      const results = json;

      results.forEach(function(item){
        if (item.id === 11){ 
        contentContainer.innerHTML += `<div class = "text-color">
        <h1>${item.title.rendered}</h1>
        <p>${item.content.rendered}</p>
        </div>`;
    }
        if (item.id !== 11 && item.id !== 70){
        carousel.innerHTML += `<a class="carousel text-decoration text-color" href="specificBlog.html?id=${item.id}">
        <h2>${item.title.rendered}</h2>
        </a>
       `;

    }

            
    next.onclick = ()=>{
        carousel.scrollLeft += slideWidth
    };

    previous.onclick = ()=>{
        carousel.scrollLeft -= slideWidth
    };
      });

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
