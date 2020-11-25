// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

// mongoose.connection.on('connected', () => {
//   console.log('mongodb://localhost:27017/test');
// });

// mongoose.connection.on('error', (err) => {
//   console.log('Mongoose connection error: ' + err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Mongoose disconnected');
// });

// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('Mongoose connection disconnected app termination');
//     process.exit(0);
//   });
// });

const mongoose = require('mongoose');

// const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env;

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = '';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'test';

const options = {
  useNewUrlParser: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectInterval: 500,
  connectTimeoutMS: 10000,
  useUnifiedTopology: true
};

const url = `mongodb://127.0.0.1:27017/test`;

mongoose
  .connect(url, options)
  .then(function () {
    console.log('MongoDB is connected');
  })
  .catch(function (err) {
    console.log(err);
  });

// const options = {
//   autoIndex: false, // Don't build indexes
//   reconnectTries: 30, // Retry up to 30 times
//   reconnectInterval: 500, // Reconnect every 500ms
//   poolSize: 10, // Maintain up to 10 socket connections
//   // If not connected, return errors immediately rather than waiting for reconnect
//   bufferMaxEntries: 0
// };

// const connectWithRetry = () => {
//   console.log('MongoDB connection with retry');
//   mongoose
//     .connect('mongodb://localhost:27017/test', options)
//     .then(() => {
//       console.log('MongoDB is connected');
//     })
//     .catch((err) => {
//       console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
//       setTimeout(connectWithRetry, 5000);
//     });
// };

// connectWithRetry();

// -------------

// const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// const Schema = mongoose.Schema;
// // для работы с promise
// mongoose.Promise = global.Promise;

// // установка схемы
// const personScheme = new Schema(
//   {
//     text: String
//   },
//   { collection: 'list' }
// );

// const Person = mongoose.model('list', personScheme);
