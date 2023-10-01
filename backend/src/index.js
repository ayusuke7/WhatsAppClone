import express from "express";
import cors from "cors";

import useRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(useRoute);
app.use(messageRoute);

app.listen(3333, () => {
  console.log(`Server started at ${new Date().toJSON()}`);
});
