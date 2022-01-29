const express = require("express");
const cors = require("cors");
import { testConnection } from "./database/connection";
import routes from "./routes";

testConnection();
const app = express();

const PORT = process.env.PORT || 3333;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} `);
});
export default app;
