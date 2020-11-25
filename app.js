const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// API/V1.0/
//API/V2.0/
const app = express();
app.use(cors()); // подключение cors если на разных доменах
require('./models');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ err: '404', message: 'Use api on routes /api' });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ err: '500', message: err.message });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
