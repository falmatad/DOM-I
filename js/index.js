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

// Img for header 

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Img for Body

let bodyImg = document.getElementById("middle-img");
bodyImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update Html Content

// ---------------------header------------------
let navLinks = document.getElementsByTagName("a");
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";

let newMenue1 = document.createElement("a");
newMenue1.textContent = "Login";
let newMenue2 = document.createElement("a");
newMenue2.textContent = "Sign Up";
console.log(newMenue2);
let newNav = document.querySelector("nav");
newNav.appendChild(newMenue1);
newNav.appendChild(newMenue2);



console.log(newNav);
// cta-title

let ctaTitle = document.querySelector("h1");
console.log(ctaTitle);
ctaTitle.style.whiteSpace = "pre";
ctaTitle.textContent = "Dom \n Is \n Awesome";

// cta-button
let ctaButton = document.querySelector("button");

ctaButton.textContent = "Get Started";
// 

// ---------------------main--------------------
// ---------------------footer------------------
let footerP = document.querySelector("footer p");
footerP.textContent = "Copyright Great Idea! 2018"

