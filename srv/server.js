const cds = require('@sap/cds');
const express = require('express');
const app = express();

cds.on('bootstrap', async (app) => {
  const startGraphQL = require('./graphql');
  await startGraphQL(app);
});

cds.serve('all').in(app);
