import express from "express";
import React from "react";

import Index from "../components/pages/index";

import RouterFactory from "../helpers/router"

const router = express.Router();

router.get("/", RouterFactory.handler("index", <Index />));

export default router;
