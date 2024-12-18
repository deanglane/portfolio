const app = {};

app.portfolio = [
  {
    name: "Flash It!",
    url: "https://flash-it-app.netlify.app",
    repo: "https://github.com/deanglane/dean-lane-flash-it-app",
    desc: "A React based flash card app that allows users to enter their study notes into a Firebase database and review them individually on the DOM.",
    images: {
      img: "./assets/flash_it_new.png",
      alt: "Restaurant bar website called Bar One ",
    },
    tag: ["feature", "crud"],
    icon: "fa-solid fa-laptop-code",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg",
    ],
  },
  {
    name: "Bar One",
    url: "https://deanlane-proj01-bar-one.netlify.app/",
    repo: "https://github.com/deanglane/dean-lane-bar-one",
    desc: "Web site for a bar restaurant that features a responsive design, blog and a vanilla javascript meal ordering system  ",
    images: {
      img: "./assets/bar_one_new.png",
      alt: "Restaurant bar website called Bar One ",
    },
    tag: ["pdf", "feature"],
    icon: "fa-solid fa-laptop-code",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg",
    ],
  },
  {
    name: "Hangry Tummy",
    url: "https://deanlane-assign01-hungry-tummy.netlify.app",
    repo: "https://github.com/deanglane/dean-lane-hangry-tummy",
    desc: "A design showcasing responsiveness and accessibility",
    images: {
      img: "./assets/hangry_tummy.png",
      alt: "Restaurant bar website called Bar One ",
    },
    tag: "pdf",
    icon: "fa-solid fa-laptop-code",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg",
    ],
  },
  {
    name: "Pokemon Pokedex app",
    url: "https://dean-lane-pokemon-app.netlify.app/",
    repo: "https://github.com/JC47-P2-Sabrina-Dean/pokedex-app",
    desc: "A pokemon themed app demonstrating an Rest API call",
    images: {
      img: "./assets/pokemon_pokedex_app_new.png",
      alt: "Restaurant bar website called Bar One ",
    },
    tag: ["app", "feature"],
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg",
    ],
  },
  {
    name: "Daily Horoscope API App",
    url: "https://deanlane-dailyhoroscopeapp.netlify.app/",
    repo: "https://github.com/JC47-P2-Sabrina-Dean/horoscope-app",
    desc: "A daily horoscope app to give the user their horoscope for either today, yesterday or tomorrow. This was built using Javascript, HTML5, CSS3 and SASS and makes an API call to retrieve the information.",
    images: {
      img: "./assets/daily_horoscope_app.png",
      alt: "Daily horoscope app thumbnail",
    },
    tag: ["api"],
    icon: "fa-brands fa-app-store",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg",
    ],
  },
  {
    name: "Battle Rockets",
    url: "https://battlerockets-game.netlify.app/",
    repo: "",
    desc: "A team built collaborative React Project which is a battleship style game where users can search and destroy rocket ships pulled from the SpaceX API. ",
    images: {
      img: "./assets/battle_rockets_new.png",
      alt: "A javascript based game app",
    },
    tag: ["api", "crud"],
    icon: "fa-solid fa-screwdriver-wrench",
    languages: [
      "./assets/svg/html5-original-wordmark.svg",
      "./assets/svg/css3-original-wordmark.svg",
      "./assets/svg/sass-original.svg",
      "./assets/svg/javascript-original.svg",
    ],
  },
  {
    name: "Test Game",
    url: "#", // Todo link to game in browser
    repo: "#", // Todo link to github repo
    desc: "A description of the game",
    images: {
      img: "./assets/battle_rockets_new.png",
      alt: "A Godot based game app",
    },
    tag: ["app", "game"],
    icon: "fa-solid fa-screwdriver-wrench", // TODO need to find the icon for controller
    languages: [
      "./assets/svg/html5-original-wordmark.svg", // TODO need to find the svg for a GDScript / Python
    ],
  },
];

app.portfolioDescriptions = {
  featured: "A collection of my favorite projects",
  "web sites":
    "Websites built using HTML5, CSS3 and Sass. Additional functionality has been added to some using Javascript ES6. All sites are accessible and responsive",
  apps: "Applications built with React 3.0 utilizing components, states, hooks and routings. Some applications feature Rest API calls and/or Firebase realtime databases and authentication",
  development:
    "Coming soon! Websites adn apps that are currently in development. Check out my Github to keep up to date on latest commits",
};

app.portfolioActive = () => {
  const websites = document.querySelector(".btnNav");
  websites.classList.add("btnNav-active");
};

app.portfolioSelect = () => {
  const buttonNavs = document.querySelectorAll("#btnNav");

  buttonNavs.forEach((btnNav) => {
    btnNav.addEventListener("click", (e) => {
      buttonNavs.forEach((f) => f.classList.remove("btnNav-active"));
      e.target.classList.add("btnNav-active");
      app.portfolioLoad(e.target.value);
    });
  });
};

app.portfolioLoad = (value) => {
  const portfolioUl = document.getElementById("portfolioDisplay");
  cards = app.portfolio.filter((card) => card.tag.indexOf(value) !== -1);
  portfolioUl.innerHTML = "";
  cards.forEach((card) => {
    const portfolioLi = document.createElement("li");
    portfolioLi.innerHTML = `<i class="${card.icon}"></i>
    <h4>${card.name}</h4>
    <div class="portfolioPreviewImg">
      <img src="${card.images.img}" alt="${card.images.alt}">
    </div>
    <p>${card.desc}</p>
    <div class="portfolioLinks">
      <a class="btn" href="${card.url}">Preview</a>
      <a class="btn" href="${card.repo}">Code</a>
    </div>`;

    portfolioLi.classList.add("portfolioCard");
    portfolioUl.appendChild(portfolioLi);
  });
};

// clearing users inputs after submit
app.handleFormSubmit = (e) => {
  e.preventDefault();
  app.name.value = "";
  app.email.value = "";
  app.subject.value = "";
  app.comment.value = "";
};

app.contactForm = () => {
  app.formBtn = document.getElementById("formBtn");
  app.formClear = document.getElementById("formClear");
  app.subject = document.getElementById("subject");
  app.name = document.getElementById("name");
  app.email = document.getElementById("email");
  app.comment = document.getElementById("comment");

  app.formBtn.addEventListener("click", app.handleFormSubmit);
  app.formClear.addEventListener("click", app.handleFormSubmit);
};

app.init = () => {
  app.portfolioActive();
  app.portfolioSelect();
  app.portfolioLoad("feature");
  app.contactForm();
  AOS.init({
    duration: 1500,
    once: true,
  });
};

app.init();
