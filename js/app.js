const app = {};

app.portfolio = [
  { 
    name: "Bar One",
    url: "https://deanlane-proj01-bar-one.netlify.app/",
    desc: "Web site for a bar restaurant that features a responsive design, blog and a vanilla javascript meal ordering system  ",
    tag: ["website", "feature"],
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>",
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
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>"
  },
  {
    name: "web3",
    url: "http",
    desc: "something",
    tag: "website",
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>"
  },
  {
    name: "web4",
    url: "http",
    desc: "something",
    tag: "website",
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>"
  },
  {
    name: "web5",
    url: "http",
    desc: "something",
    tag: "website",
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>"
  },
  {
    name: "web6",
    url: "http",
    desc: "something",
    tag: "website",
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>"
  },
  {
    name: "web7",
    url: "http",
    desc: "something",
    tag: "website",
    icon: "<i class=\"fa- solid fa - laptop - code\"></i>"
  },
  {
    name: "Pokemon Pokedex app",
    url: "https://dean-lane-pokemon-app.netlify.app/",
    desc: "A pokemon themed app demonstrating an Rest API call",
    tag: ["app", "feature"],
    icon: "<i class=\"fa- brands fa - app - store\"></i>"
  },
  {
    name: "app2",
    url: "http",
    desc: "something",
    tag: "app",
    icon: "<i class=\"fa- brands fa - app - store\"></i>"
  }
];

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
    `<h4>${card.name}</h4>
    <div class="portfolioPreviewImg">
      <img src="https://placekitten.com/250/250" alt="">
    </div>
    <div class="langIcn">
      <img src="./assets/svg/html5-original-wordmark.svg" alt="">
      <img src="./assets/svg/css3-original-wordmark.svg" alt="">
      <img src="./assets/svg/sass-original.svg" alt="">
      <img src="./assets/svg/javascript-original.svg" alt="">
    </div>
    <a href="${card.url}">Live Preview</a>`
    
    ;
    portfolioLi.classList.add('portfolioCard');
    portfolioUl.appendChild(portfolioLi);
  })
}

app.init = () => {
  app.portfolioActive();
  app.portfolioSelect();
}

app.init();