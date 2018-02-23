We used create-react-app to make the initial setup.

Dependencies to run this:

"axios": "^0.18.0",
"body-parser": "^1.18.2",
"concurrently": "^3.5.1",
"cors": "^2.8.4",
"express": "^4.16.2",
"mongo-client": "^0.2.1",
"mongoclient": "^1.0.3",
"mongodb": "^3.0.2",
"mongoose": "^5.0.6",
"nodemon": "^1.15.1",
"path": "^0.12.7",
"react": "^16.2.0",
"react-dom": "^16.2.0",
"react-scripts": "1.1.1",

Random.js links to app.js so that we can use a random number generator.

Potential use for the server.js

// .post((req, res) => {
//   const win = new Win();
//   win.primate = 0;
//   win.save(err => {
//     console.log("saving")
//     if (err)
//       res.send(err);
//     res.json({
//       message: 'Primate won once'
//     });
//   })
// })
