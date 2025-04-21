import dotenv from "dotenv";
import app from "./src/app.js";
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("app is running on", process.env.PORT);
});
