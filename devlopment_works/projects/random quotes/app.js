const quotes = document.getElementsByClassName("quotes");

const author = document.getElementsByClassName("author");

const btn = document.getElementsByClassName("btn");

let realData = "";
let quotesData = "";
let authorData = "";

const getNewQuotes = () => {
  let rnum = Math.random();
  let val = Math.floor(val * 10);
  quotesData = realData[val];

  quotes.innerText = `${quotesData.text}`;
  quotes.innerText = `${quotesData.author}`;
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";

  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (err) {}
};

btn.addEventListener("click", getNewQuotes);
getQuotes();
