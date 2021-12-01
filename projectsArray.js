//Key Project Images
import lesperanceKp from './public/lesperance-kp.png'
import pv2Kp from './public/portofolioV2-kp.png'

//All Project Thumbs
import crawl from './public/crawl-thumb.png'
import doc from './public/documentation-thumb.png'
import face from './public/face-thumb.png'
import landing from './public/landing-thumb.png'
import lesp from './public/lesperance-thumb.png'
import med from './public/med-thumb.png'
import pv1 from './public/portofolioV1-thumb.png'
import survey from './public/survey-thumb.png'
import pv2 from './public/portofolioV2-thumb.png'

export const categories = [["web","Web"],["py","Python"],["ios","iOS"],["all","Show All"],["none","Hide All"]]


export const projectsArray = [
  {
    name: 'Online Shop',
    important: true,
    mockImage: {lesperanceKp},
    liveLink: "https://lesperance.ro",
    gitLink: "",
    category: "web",
    image: {lesp},
    stack: ["NextJS","ReactJS","HTML","CSS","MongoDB","KeystoneJS","Nginx"],
    description: "This NextJS app allows the user to signup,login, find,add to cart and order products, check out prices and stock for products and services and send emails to the owner. Through KeystoneJS the owner can add/delete/edit contents from the database"
  },
  {
    name: 'Portofolio V2',
    important: true,
    mockImage: {pv2Kp},
    liveLink: "immm",
    gitLink: "imm",
    category: "web",
    image: {pv2},
    stack: ["NextJS","ReactJS","HTML","CSS"],
    description: "This NextJS app serves the purpose of showcasing my projects",
  },
  {
    name: 'Portofolio V1',
    liveLink: "immm",
    gitLink: "imm",
    category: "web",
    image: {pv1},
    stack: ["HTML","CSS"],
    description: "This served the purpose of showcasing my projects",
  },
  {
    name: `React & Clarify's Face Detection`,
    liveLink: "immm",
    gitLink: "imm",
    category: "web",
    image: {face},
    stack: ["ReactJS","HTML","CSS","ExpressJS","Redis","JWT","Postgresql"],
    description: "This React app allows the user to signup, signin, upload an image to be used for demonstrating clarifi's facial recognition api, it also increases the user's score for each image uploaded. Redis is used to make the JWTs expire",
  },
  {
    name: 'Survey Form',
    liveLink: "immm",
    gitLink: "imm",
    category: "web",
    image: {survey},
    stack: ["HTML","CSS"],
    description: "Built this for FreeCodeCamp's Responsive Web Design Certification",
  },
  {
    name: 'Documentation Page',
    liveLink: "immm",
    gitLink: "im",
    category: "web",
    image: {doc},
    stack: ["HTML","CSS"],
    description: "Built this for FreeCodeCamp's Responsive Web Design Certification",
  },
  {
    name: 'Landing Page',
    liveLink: "immm",
    gitLink: "imm",
    category: "web",
    image: {landing},
    stack: ["Javascript","HTML","CSS"],
    description: "Built this for FreeCodeCamp's Responsive Web Design Certification",
  },
  {
    name: 'WebCrawler Hangman',
    liveLink: "",
    gitLink: "imm",
    category: "py",
    image: {crawl},
    stack: ["Python"],
    description: "This project consists of two python scripts, one that crawls an website for quotes and their author, storing them in a csv and the other script uses this csv to promt the user to play hangman to find the author,the user gets a variety of hints for each failed guessing attempt",
  },
  {
    name: 'Meditation App',
    liveLink: "",
    gitLink: "bit",
    category: "ios",
    image: {med},
    stack: ["Swift","UiKit"],
    description: "App for agregating and playing mp3 files and youtube videos",
  },
]