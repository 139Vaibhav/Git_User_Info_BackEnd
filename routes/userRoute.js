const express = require("express");
const { getRepoPage } = require("../controllers/paginationController");
const { getAllRepo } = require("../controllers/repoController");
const { getUserInfo } = require("../controllers/userController");

const router = express.Router();

router.route("/userInfo/:username").get(getUserInfo);
router.route("/repoInfo/:username").get(getAllRepo);
router.route("/repoPageInfo/:username").get(getRepoPage);

module.exports = router;