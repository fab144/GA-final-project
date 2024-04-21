
// scroll function to make stuff disappear when scroll

function scrollGone(){
  hoverNav1.classList.remove("show");
  hoverNav1.classList.add("hide");
  hoverNav2.classList.remove("show");
  hoverNav2.classList.add("hide");
  hoverNav3.classList.remove("show");
  hoverNav3.classList.add("hide");
  hoverNav4.classList.remove("show");
  hoverNav4.classList.add("hide");
  profileTab.style.display = "none";
}

//hover navtab

let navTab1 = document.querySelector("#nav-tab-1");
let navTab2 = document.querySelector("#nav-tab-2");
let navTab3 = document.querySelector("#nav-tab-3");
let navTab4 = document.querySelector("#nav-tab-4");
let hoverNav1 = document.querySelector("#nav-hover-1");
let hoverNav2 = document.querySelector("#nav-hover-2");
let hoverNav3 = document.querySelector("#nav-hover-3");
let hoverNav4 = document.querySelector("#nav-hover-4");

function hoverIt1(event){
  event.preventDefault();
  hoverNav1.classList.add("show");
}

function hoverIt2(event){
  event.preventDefault();
  hoverNav2.classList.add("show");
}

function hoverIt3(event){
  event.preventDefault();
  hoverNav3.classList.add("show");
}

function hoverIt4(event){
  event.preventDefault();
  hoverNav4.classList.add("show");
}

function hoverOut1(){
  hoverNav1.classList.remove("show");
  hoverNav1.classList.add("hide");
}

function hoverOut2(){
  hoverNav2.classList.remove("show");
  hoverNav2.classList.add("hide");
}

function hoverOut3(){
  hoverNav3.classList.remove("show");
  hoverNav3.classList.add("hide");
}

function hoverOut4(){
  hoverNav4.classList.remove("show");
  hoverNav4.classList.add("hide");
}

navTab1.addEventListener("mouseover" , hoverIt1);
navTab2.addEventListener("mouseover" , hoverIt2);
navTab3.addEventListener("mouseover" , hoverIt3);
navTab4.addEventListener("mouseover" , hoverIt4);
hoverNav1.addEventListener("mouseleave" , hoverOut1);
hoverNav2.addEventListener("mouseleave" , hoverOut2);
hoverNav3.addEventListener("mouseleave" , hoverOut3);
hoverNav4.addEventListener("mouseleave" , hoverOut4);
window.addEventListener("scroll", profileClickOff);

// profile tab

const profile = document.querySelector(".profile");
const profileTab = document.querySelector(".profile-tab");

function profileClickOn(event){
 profileTab.style.display = "inline";
}

function profileClickOff(event){
  profileTab.style.display = "none";
 }

profile.addEventListener("click" , profileClickOn);
profile.addEventListener("dblclick" , profileClickOff);
window.addEventListener("scroll", scrollGone);

// hamburger mobile tab

let hamburgerIcon = document.querySelector("#hamburger-icon");
let hamburgerCross = document.querySelector("#cross-icon");
let hamburger = document.querySelector(".hamburger-tab");


function hamburgerClick(event){
  hamburger.classList.remove("hamburger-default");
  hamburger.classList.add("hamburger-click");
  document.body.style.overflow = "hidden";
  hamburgerIcon.style.display = "none";
  hamburgerCross.style.display = "inline";
}

function crossClick(event){
  hamburger.classList.add("hamburger-default");
  hamburger.classList.remove("hamburger-click");
  document.body.style.overflow = "visible";
  hamburgerIcon.style.display = "inline";
  hamburgerCross.style.display = "none";
}

hamburgerIcon.addEventListener("click" , hamburgerClick);
hamburgerCross.addEventListener("click" , crossClick);

// News API

  //the whole styling and assembling for news thing to appear
  function addNews(obtain){
    console.log("Article Count: " + obtain.World.length);
    for (let i = 0; i < 20; i++) {
      let newsFeed = document.querySelector(".newsfeed-container");
      let article = document.createElement("article");
      let heading2 = document.createElement("h2");
      let linkArticle = document.createElement("a");
      heading2.innerHTML = obtain.World[i].title + " - " +obtain.World[i].source;
      linkArticle.href = obtain.World[i].link;
      linkArticle.innerHTML = "Read more >>";
      article.classList.add("news");
      article.append(heading2, linkArticle);
      newsFeed.appendChild(article);
      
    }
  }

async function getNews() {

    let endpointURL = 'https://ok.surf/api/v1/cors/news-feed';
    
            // Fetch data from the remote HTTP endpoint
          let response = await fetch(endpointURL);
    
            // Extract the response data as a JSON object
          let projectInfo = await response.json();
    
          
          addNews(projectInfo);
    }
    
    // Call our async function. It returns a Promise, but we don't use its return value.

    getNews();
    

    // Weather API

    //the whole styling and assembling for weather thing to appear (and date to get array)
    function addWeather(obtainWeather){
      const d = new Date();
      getHour = d.getHours();
      j = getHour;
      let weatherFeed = document.querySelector(".weather-container");
      let article = document.createElement("article");
      let tempInfo = document.createElement("p");
      let humidInfo = document.createElement("p");
      tempInfo.innerHTML = "Temperature: " + obtainWeather.hourly.temperature_2m[j] + obtainWeather.hourly_units.temperature_2m;
      humidInfo.innerHTML = "Humidity: " + obtainWeather.hourly.relative_humidity_2m	[j] + obtainWeather.hourly_units.relative_humidity_2m;
      article.classList.add("weather");
      article.append(tempInfo, humidInfo);
      weatherFeed.appendChild(article);
  }

async function getWeather() {
    let weatherURL = 'https://api.open-meteo.com/v1/forecast?latitude=3.1412&longitude=101.6865&hourly=temperature_2m,relative_humidity_2m,rain&daily=sunrise,sunset&timezone=Asia%2FSingapore&forecast_days=1';
    
            // Fetch data from the remote HTTP endpoint
          let responseWeather = await fetch(weatherURL);
    
            // Extract the response data as a JSON object
          let weatherInfo = await responseWeather.json();
    
          
          addWeather(weatherInfo);
          // document.body.innerHTML = 'Latitude: ' + weatherInfo.latitude;
    }
    
    // Call our async function. It returns a Promise, but we don't use its return value.

    getWeather();
