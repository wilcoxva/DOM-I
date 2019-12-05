const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navA = document.querySelectorAll("nav a")
navA[0].innerHTML = "Services";
navA[1].innerHTML = "Product";
navA[2].innerHTML = "Vision";
navA[3].innerHTML = "Features";
navA[4].innerHTML = "About";
navA[5].innerHTML = "Contact";

const newItem = document.createElement("a");
newItem.textContent = "New Item";
const newContent = document.createElement("a");
newContent.textContent = "New Content";
const secondaryContent = document.querySelector("nav");
secondaryContent.prepend(newItem);
secondaryContent.append(newContent);

let navA2 = document.querySelectorAll("nav a")
navA2.forEach(element => {
  element.style.color = "green";
});

let logoImg = document.querySelector("#logo-img")
logoImg.src = 'img/logo.png';

let ctaH1 = document.querySelector(".cta-text h1")
ctaH1.innerHTML = "DOM<br>IS<br>AWESOME";

let ctaButton = document.querySelector(".cta-text button")
ctaButton.innerHTML = "Get Started";

let ctaImg = document.querySelector("#cta-img")
ctaImg.src = 'img/header-img.png';

let topContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4")
topContentH4[0].innerHTML = "Features";
topContentH4[1].innerHTML = "About";

let topContentP = document.querySelectorAll(".main-content .top-content .text-content p")
topContentP[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et.  Suspendisse vel tempus odio, in interdutm nisi.  Suspendisse eu ornare misi.  Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContentP[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et.  Suspendisse vel tempus odio, in interdutm nisi.  Suspendisse eu ornare misi.  Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.querySelector("#middle-img")
middleImg.src = 'img/mid-page-accent.jpg';

let bottomContentH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4")
bottomContentH4[0].innerHTML = "Services";
bottomContentH4[1].innerHTML = "Product";
bottomContentH4[2].innerHTML = "Vision";

let bottomContentP = document.querySelectorAll(".main-content .bottom-content .text-content p")
bottomContentP[0].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et.  Suspendisse vel tempus odio, in interdutm nisi.  Suspendisse eu ornare misi.  Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentP[1].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et.  Suspendisse vel tempus odio, in interdutm nisi.  Suspendisse eu ornare misi.  Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentP[2].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et.  Suspendisse vel tempus odio, in interdutm nisi.  Suspendisse eu ornare misi.  Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contactH4 = document.querySelector(".contact h4")
contactH4.innerHTML = "CONTACT";

let contactP = document.querySelectorAll(".contact p")
contactP[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactP[1].innerHTML = "1 (888) 888-8888";
contactP[2].innerHTML = "sales@greatidea.io";

let footer = document.querySelector("footer p")
footer.innerHTML = "Copyright Great Idea! 2018";

function newFunction() {
  navA.style.color = "green";
}
