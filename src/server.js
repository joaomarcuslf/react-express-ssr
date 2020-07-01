import express from "express";
import compression from "compression";
import index from "./routes/index";
import path from "path";

const PORT = process.env.PORT || 3000;
const IP_BIND = process.env.IP || '0.0.0.0';

// Server var
const app = express();

// View engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

// Middleware
app.use(compression());

app.use(express.static(__dirname + "/public"));

//Routes
app.use("/", index);

app.listen(PORT, IP_BIND, () => console.log(`Server running on http://${IP_BIND}:${PORT}/`));
