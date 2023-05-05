const app = {};

app.portfolio = [
  { 
    name: "Bar One",
    url: "https://deanlane-proj01-bar-one.netlify.app/",
    desc: "Web site for a bar restaurant that features a responsive design, blog and a vanilla javascript meal ordering system  ",
    tag: ["website", "feature"],
    icon: "fa-solid fa-laptop-code",
    languages: [
      "./assets/svG/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg"
    ]
  },
  {
    name: "web2",
    url: "http",
    desc: "something",
    tag: "website",
    icon: "fa-solid fa-laptop-code"
  },
  {
    name: "Pokemon Pokedex app",
    url: "https://dean-lane-pokemon-app.netlify.app/",
    desc: "A pokemon themed app demonstrating an Rest API call",
    tag: ["app", "feature"],
    icon: "fa-brands fa-app-store"
  },
  {
    name: "in development",
    url: "#",
    desc: "something",
    tag: "development",
    icon: "fa-brands fa-app-store"
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
      <img src="https://placekitten.com/250/250" alt="">
    </div>
    <div class="langIcn">
      <img src="./assets/svg/html5-original-wordmark.svg" alt="">
      <img src="./assets/svg/css3-original-wordmark.svg" alt="">
      <img src="./assets/svg/sass-original.svg" alt="">
      <img src="./assets/svg/javascript-original.svg" alt="">
    </div>
    <a href="${card.url}">Live Preview</a>`;

    portfolioLi.classList.add('portfolioCard');
    portfolioUl.appendChild(portfolioLi);
  })
}

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