const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGODB } = require('./config');

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
const schema = require('./schema/schema');

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to database');
});

app.listen(7000, () => {
  console.log('now listening on port 7000');
});
