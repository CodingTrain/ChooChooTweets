const dotenv = require("dotenv");
dotenv.config();

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
  env: process.env.TWITTER_WEBHOOK_ENV,
  ngrok: process.env.NGROK_AUTH_TOKEN,
};

// For testing in this repo
const ChooChooTweets = require("../../index.js");
const a2zitp = new ChooChooTweets(config);

start();
async function start() {
  console.log('listening');
  await a2zitp.initActivity(tweetHandler);
}

async function tweetHandler(for_user_id, tweet) {
  console.log('hello');
  const { user, id_str } = tweet;
  if (user.id_str !== for_user_id) {
    await a2zitp.reply(id_str, "hi back!");
  }
}
