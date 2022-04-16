const express = require("express");
const auth = require("./middleware/auth");
const cors = require("cors");
const http = require("http");

require("dotenv").config();
require("./config/database").connect();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/auth/status", auth, async (req, res, next) => {
    res.json({ success: true, message: "Still logged in" });
});

app.get("/getGames", require("./routes/getGames"));

app.get("/getCashGames", require("./routes/getCashGames"));

app.post("/addUser", auth, require('./routes/addUser'));

app.post("/removeUser", auth, require("./routes/removeUser"));

app.post("/login", require("./routes/login"));

app.post("/register", require("./routes/register"))

app.post("/createGame", auth, require("./routes/createGame"));

app.post("/createCashGame", auth, require("./routes/createCashGame"));

app.post("/updateWinners", require("./routes/updateWinners"));

app.post("/completeGame", require("./routes/completeGame"));

app.get("/userdata", auth, require("./routes/userData"));

app.get("/amijoined/:gameTitle", auth, require("./routes/amIJoined"));

//app.get("/amijoinedCash/:gameTitle", auth, require("./routes/amIJoinedCash"));

app.get("/gamedata/:gameTitle", auth, require("./routes/getGameData"));

app.get("/cashGameData/:gameTitle", auth, require('./routes/getCashGameData'));

app.get("/getUsers", require("./routes/getUsers"));

app.post("/updateGain", require("./routes/updateGain"));

http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
    console.log(`Server started ${port}`);
});
