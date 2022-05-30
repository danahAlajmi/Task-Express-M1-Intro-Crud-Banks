const express = require("express");
const router = express.Router();

const {
  fetchAccounts,
  createAccounts,
  updateAccounts,
  deleteAccounts,
} = require("./accounts.controllers");

router.get("/", fetchAccounts);
router.post("/", createAccounts);
router.put("/:accountId", updateAccounts);
router.delete("/:accountId", deleteAccounts);

module.exports = router;
