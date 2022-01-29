const express = require("express");
import RegisterJson from "./Controllers/registerJSON";
const routes = express.Router();
routes.use(express.json());

routes.post("/", RegisterJson.registeItem);
routes.get("/:id", RegisterJson.getItensByID);
routes.post("/:id", RegisterJson.updateByID);

export default routes;
