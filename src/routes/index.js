import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";

import Index from "../components/pages/index";

const router = express.Router();

router.get("/", async (req, res) => {
  const reactComp = renderToString(<Index />);

  fs.writeFile("tmp/index.html", reactComp, function (err) {
    if (err) return console.log(err);

    res.status(200).render("pages/index", { reactApp: reactComp });
  });
});

export default router;
