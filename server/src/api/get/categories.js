const express = require("express");

const router = express.Router();
const tasks = [
  {
    id: "1",
    category: "personal",
    categoryID: 2,
    description: "call my friend passant",
  },
  {
    id: "2",
    category: "work",
    categoryID: 1,
    description: "call my friend passant",
    data: "0001-01-01 through 9999-12-31",
  },
];
router.get("/", (req, res) => {
  res.json({ message: "get all tasks" });
});
module.exports = router;
