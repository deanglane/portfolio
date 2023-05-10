const app = {};

app.portfolio = [
  { 
    name: "Bar One",
    url: "https://deanlane-proj01-bar-one.netlify.app/",
    desc: "Web site for a bar restaurant that features a responsive design, blog and a vanilla javascript meal ordering system  ",
    images:{
      img:"./assets/bar_one.png",
      alt:"Restaurant bar website called Bar One "
    },
    tag: ["website", "feature"],
    icon: "fa-solid fa-laptop-code",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "Hangry Tummy",
    url: "https://deanlane-assign01-hungry-tummy.netlify.app",
    desc: "A design showcasing responsiveness and accessibility",
    images: {
      img: "./assets/hangry_tummy.png",
      alt: "Restaurant bar website called Bar One "
    },
    tag: "website",
    icon: "fa-solid fa-laptop-code",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "Pokemon Pokedex app",
    url: "https://dean-lane-pokemon-app.netlify.app/",
    desc: "A pokemon themed app demonstrating an Rest API call",
    images: {
      img: "./assets/pokemon_pokedex_app.png",
      alt: "Restaurant bar website called Bar One "
    },
    tag: ["app", "feature"],
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "Daily Horoscope API App",
    url: "https://deanlane-dailyhoroscopeapp.netlify.app/",
    desc: "A daily horoscope app to give the user their horoscope for either today, yesterday or tomorrow. This was built using Javascript, HTML5, CSS3 and SASS and makes an API call to retrieve the information.",
    images: {
      img: "./assets/daily_horoscope_app.png",
      alt: " "
    },
    tag: ["app"],
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "Project 3 App",
    url: "",
    desc: "A placeholder for a future React app project",
    images: {
      img: "./assets/coming_soon.avif",
      alt: "Restaurant bar website called Bar One "
    },
    tag: ["app"],
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "Project 4 App",
    url: "",
    desc: "A placeholder for a future React app project",
    images: {
      img: "./assets/coming_soon.avif",
      alt: "Restaurant bar website called Bar One "
    },
    tag: ["app"],
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "Escape Game",
    url: "#",
    desc: "An game built using HTML, CSS and Vanilla Javascript",
    images: {
      img: "./assets/coming_soon.avif",
      alt: "A javascript based game app"
    },
    tag: "development",
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  }
];

app.portfolioDescriptions = {
  'featured': "A collection of my favorite projects",
  'web sites': "Websites built using HTML5, CSS3 and Sass. Additional functionality has been added to some using Javascript ES6. All sites are accessible and responsive",
  'apps': "Applications built with React 3.0 utilizing components, states, hooks and routings. Some applications feature Rest API calls and/or Firebase realtime databases and authentication",
  'development': "Coming soon! Websites adn apps that are currently in development. Check out my Github to keep up to date on latest commits"  
}

app.portfolioActive = () => {
  const websites = document.querySelector('.btnNav');
  console.log('first load = ', websites.value);
  websites.classList.add('btnNav-active');
};

app.portfolioSelect = () => {
  const buttonNavs = document.querySelectorAll('#btnNav');

  buttonNavs.forEach((btnNav)=> {
    btnNav.addEventListener('click', (e) => {
      buttonNavs.forEach(f => f.classList.remove('btnNav-active'));
      e.target.classList.add('btnNav-active');
      app.portfolioLoad(e.target.value);
    })
  })
};

app.portfolioLoad = (value) => {
  const portfolioUl = document.getElementById('portfolioDisplay');
  cards = app.portfolio.filter(card => card.tag.indexOf(value) !== -1);
  portfolioUl.innerHTML = "";
  cards.forEach((card)=>{
    const portfolioLi = document.createElement('li');
    portfolioLi.innerHTML = 
    `<i class="${card.icon}"></i>
    <h4>${card.name}</h4>
    <div class="portfolioPreviewImg">
      <img src="${card.images.img}" alt="${card.images.alt}">
    </div>
    <p>${card.desc}</p>
    <a href="${card.url}">Live Preview</a>`;
    
    portfolioLi.classList.add('portfolioCard');
    portfolioUl.appendChild(portfolioLi);
    
    
  })

};

// clearing users inputs after submit
app.handleFormSubmit = () => {
  app.name.value = "";
  app.email.value = "";
  app.subject.value = "";
  app.comment.value = ""; 
};

app.contactForm = () => {
  app.formBtn = document.getElementById('formBtn');
  app.formClear = document.getElementById('formClear');
  app.subject = document.getElementById('subject');
  app.name = document.getElementById('name');
  app.email = document.getElementById('email');
  app.comment = document.getElementById('comment');

  app.formBtn.addEventListener('click', app.handleFormSubmit);
  app.formClear.addEventListener('click', app.handleFormSubmit);
};

app.init = () => {

  app.portfolioActive();
  app.portfolioSelect();
  app.portfolioLoad('feature');
  app.contactForm();
  AOS.init({
    duration: 1500,
    once: true
  });
}

app.init();