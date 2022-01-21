// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");

// here we execute express and save it in the variable app
const app = express();

// express needs to have a port to listen to...so use app.listen to specify the port and a callback that occurs once the server is running or the app is listening on that port

// app.listen(3000, () => {
//   console.log("listening on port 3000!");
// });

// once the above app.listen is running, the cursor doesn't change...it's listening for a new request! the server is running! ... but where do we send the request to?  what URL do I request? ...well,it's only running locally on my machine,so I can request from localhost:3000 (my machine: my specified port number)

// anytime I change my code I gotta ctrl^C to get out and then node index.js to get back in...

// in here we go with app.use.... anytime a request comes in, we run this callback:
//
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })

// ...to sum up...we need to listen on a port...basically a tunnel to receive requests and send data...and with app.use, anytime we get a request, the code inside it runs...but we're still not responding w/ anything yet....how do we send a response?
//
//

//

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

// when I request localhost:8080/dogs here for the URL, the response will be to send (res.send) "woof!"
app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCHED!");
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

app.get("*", (req, res) => {
  res.send(`I don't know that path!`);
});

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
