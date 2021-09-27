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

const navItem1 = document.querySelector('nav a'); 
const navItem2 = navItem1.nextElementSibling;
const navItem3 = navItem2.nextElementSibling;
const navItem4 = navItem3.nextElementSibling;
const navItem5 = navItem4.nextElementSibling;
const navItem6 = navItem5.nextElementSibling;

navItem1.textContent = siteContent['nav']['nav-item-1'];
navItem2.textContent = siteContent['nav']['nav-item-2'];
navItem3.textContent = siteContent['nav']['nav-item-3'];
navItem4.textContent = siteContent['nav']['nav-item-4'];
navItem5.textContent = siteContent['nav']['nav-item-5'];
navItem6.textContent = siteContent['nav']['nav-item-6'];

navItem1.style.color = 'green';
navItem3.style.color = 'green';
navItem5.style.color = 'green';
navItem6.style.color = 'green';
navItem2.style.color = 'green';
navItem4.style.color = 'green';

const newThingNav1 = document.createElement('a');
newThingNav1.textContent = 'haha';
newThingNav1.href = '#'
document.querySelector('nav').appendChild(newThingNav1)

const newThingNav2 = document.createElement('a');
newThingNav2.textContent = 'woot';
newThingNav2.href = '#'
document.querySelector('nav').appendChild(newThingNav2)


/// //// ////  HEADER  //// /// ///
const headerTitle = document.querySelector('.cta-text h1');
const headerButton = document.querySelector('.cta-text button');
const headerImg = document.getElementById('cta-img');

headerTitle.textContent = siteContent['cta']['h1'];
headerButton.textContent = siteContent['cta']['button'];
headerImg.setAttribute('src', siteContent['cta']['img-src'])

/// <<<< ///// MAIN CONTENT /// >>> ////
const mainContent = document.querySelectorAll('.main-content');
//features
const featuresHeader = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) h4'); 
featuresHeader.textContent = siteContent['main-content']['features-h4'];
const featuresContent = featuresHeader.nextElementSibling; 
featuresContent.textContent = siteContent['main-content']['features-content'];
//about
const aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4'); 
aboutHeader.textContent = siteContent['main-content']['about-h4'];
const aboutText = aboutHeader.nextElementSibling;
aboutText.textContent = siteContent['main-content']['about-content'];
//img
const bannerMiddle = document.getElementById('middle-img');
bannerMiddle.setAttribute('src', siteContent['main-content']['middle-img-src']);
//services
const servicesHeader = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesHeader.textContent = siteContent['main-content']['services-h4'];
const servicesText = servicesHeader.nextElementSibling;
servicesText.textContent = siteContent['main-content']['services-content']
//product
const productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productHeader.textContent = siteContent['main-content']['product-h4'];
const productText = productHeader.nextElementSibling;
productText.textContent = siteContent['main-content']['product-content'];
//vision
const visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionHeader.textContent = siteContent['main-content']['vision-h4'];
const visionText = visionHeader.nextElementSibling;
visionText.textContent = siteContent['main-content']['vision-content'];

///// <<<< CONTACT >>>> ////
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
const contactAddress = contactHeader.nextElementSibling;
const contactPhone = contactAddress.nextElementSibling;
const contactEmail = contactPhone.nextElementSibling;

contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];


//// <<<< FOOTER >>>> ///
const footerType = document.querySelector('footer p')
footerType.textContent = siteContent['footer']['copyright'];



