let username ="kristoffer.a.myhre@gmail.com";
let password ="Lo4E 1tvO DpZ8 tcNM AZik QrY1";


const body = document.querySelector("body")

const about = document.querySelector(".aboutMe")

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

      results.forEach(function(json){
        if (json.id === 70){ 
            about.innerHTML+= `<div class= "text-color">    
            <h1>${json.title.rendered}</h1>
            <h4>${json.content.rendered}</h4>
            </div>
           `   
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