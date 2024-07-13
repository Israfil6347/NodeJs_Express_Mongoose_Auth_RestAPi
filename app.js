require("./config/db");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require("./config/passport")
const ensureAuthenticate = require("./middleware/auth.middleware");
const profileRoute = require("./route/profile.route")
const authRoute= require("./route/auth/auth.route")
const adminRoute= require("./route/admin/admin.route");
const { authorize } = require("./middleware/authorize");
const moderatorRoute = require("./route/moderator/moderator.route")
const categoryRoute = require("./route/category/category.route")
const productRoute =require("./route/productRoute/product.route")
const colorRoute = require("./route/color/colorRoute")
const statusRoute = require("./route/status/status.route")
const skuRoute = require("./route/sku/sku.route")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req,res)=>{
    res.status(404).json({ message: "This is Home route" });
})

app.use("/api/auth", authRoute);

app.use("/api/moderator", moderatorRoute)

app.use("/profile",ensureAuthenticate, profileRoute);

app.use("/api/product",productRoute)

app.use("/api/category",ensureAuthenticate,authorize(["admin"]) ,categoryRoute);

app.use("/api/color",ensureAuthenticate,authorize(["admin"]) ,colorRoute);

app.use("/api/status",ensureAuthenticate,authorize(["admin" ]) ,statusRoute);

app.use("/api/admin",ensureAuthenticate,authorize(["admin"]) ,adminRoute);
app.use("/api/sku",ensureAuthenticate,authorize(["admin", "moderator"]) ,skuRoute);

app.use("/api/moderator",ensureAuthenticate,authorize(["admin", "moderator"]) ,adminRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: "router not found" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: "server is not found" });
});

module.exports= app;