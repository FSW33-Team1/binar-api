const playerRouter = require("./player.routes");
const v1 = require("express").Router();

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/players", playerRouter);
v1.use("/score", (req, res) => {
  res.json({
    score: 100
  });
})
module.exports = v1;
