const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

app.listen(3000, () => console.log(`Express app listening on port 3000!`));
