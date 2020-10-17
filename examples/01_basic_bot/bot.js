
// This is how you will use it
// const ChooChooTweets = require("choochootweets");

// For testing in this repo
const ChooChooTweets = require("../../index.js");

const dotenv = require("dotenv");

dotenv.config();

console.log('hello bot! 🤖');

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
};

const a2zitp = new ChooChooTweets(config);

testTweet();

async function testTweet() {
  const response = await a2zitp.tweet(
    'Today\'s tweet is brought to you by the number: ' + Math.random());
  console.log(response.text);
  console.log(response.id_str);
}

