// This is how you will use it
// const ChooChooTweets = require("choochootweets");

// For testing in this repo
const ChooChooTweets = require('../../index.js');

const dotenv = require('dotenv');
dotenv.config();

console.log('hello search! 🤖');

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
};

const a2zitp = new ChooChooTweets(config);

searchTweets();

async function searchTweets() {
  const response = await a2zitp.search('thecodingtrain');
  for (let tweet of response.statuses) {
    console.log(tweet.created_at);
    console.log(tweet.id);
    console.log(tweet.text);
  }
}
