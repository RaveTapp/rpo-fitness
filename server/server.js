const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    credentials: true, // Dovoli pošiljanje piškotkov
    origin: "http://localhost:5173", // Dovoli dostop iz tvoje React aplikacije
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
