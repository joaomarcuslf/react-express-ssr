import express from 'express';
import React from 'react';

import MainPage from '../pages/main-page';

import RouterFactory from '../helpers/router';

const router = express.Router();

router.get('/', RouterFactory.handler('index', <MainPage />));

export default router;
