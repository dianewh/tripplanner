const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', express.static(`${__dirname}/../public`));

app.listen(3003, () => console.log('yogaclassbuilder listening on port 3003'));

module.exports = app;
