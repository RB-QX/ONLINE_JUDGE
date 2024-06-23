// Import the required modules
const express = require("express");
const router = express.Router();

const {
  adduserproblems,
  alluserproblems,
  approveproblem,
  rejectproblem,
} = require("../controller/UserProblem");

router.post("/adduserproblem", adduserproblems);

router.get("/allpendinguserproblems", alluserproblems);

router.post("/approveproblem/:id", approveproblem);
router.delete("/rejectproblem/:id", rejectproblem);
module.exports = router;
