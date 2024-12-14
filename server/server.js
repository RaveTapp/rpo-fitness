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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
