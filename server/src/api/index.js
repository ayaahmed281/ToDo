const express = require("express");
const router = express.Router();
const tasks = require("./get/tasks");

router.get("/", (req, res) => {
  res.json({ message: "welcome to api" });
});
router.use("/tasks", tasks);
module.exports = router;
