const express = require('express');
const bodyParser = require('body-parser');
const VideoController = require('./controllers/VideoController');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/exact', VideoController.byStrictEquality);
app.post('/partial', VideoController.byPartialMatch);
app.post('/duration-range', VideoController.byDurationRange);
app.post('/tags', VideoController.byTags);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});


module.exports = app;