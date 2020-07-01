import express from 'express';
import React from 'react';

import App from '../pages/index.server';

import RouterFactory from '../helpers/router';

const router = express.Router();

router.get('/', RouterFactory.handler(
  'index',
  <App />,
));

export default router;
