require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const flash = require("express-flash");
const database = require("./database/database");
require("./auth/passport");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const employerRouter = require("./routes/employer");
const fileRouter = require("./routes/files");

const app = express();

const port = process.env.PORT || 5000;

database.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
app.use(flash());

app.use(express.static(path.join(__dirname, "client", "public")));

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/employer", employerRouter);
app.use("/file", fileRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

app
  .listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`);
  })
  .on("error", (error) => {
    console.log("\x1b[31mPort " + error.port + " is already in use\x1b[0m");
  });
