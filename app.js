const express = require('express');
const bodyParser = require('body-parser');
const { hostname, port } = require('./src/config/generalConfig');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, resp) => {
  resp.json({ message: 'OK' });
});

require('./src/controllers/productController')(app);

app.listen(port, hostname, function() {
  console.log(
    `Starting on http://${hostname}:${port} --- profile: ${app.settings.env}`
  );
});
