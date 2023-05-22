let username ="kristoffer.a.myhre@gmail.com";
let password ="Lo4E 1tvO DpZ8 tcNM AZik QrY1";

const cardContainer = document.querySelector(".cards")

const body = document.querySelector("body")

const fullPost = document.querySelector(".fullPost")

let hamburger = document.querySelector(".hamburger")

let navbar = document.querySelector(".navbar")

let menuOpen = false


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
        if (item.id !== 11 && item.id !== 70){ 
        cardContainer.innerHTML += `<a class="text-color text-decoration" href="specificBlog.html?id=${item.id}">
        <h1>${item.title.rendered}</h1>
        </a>
       `
       ;
        
    }

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
