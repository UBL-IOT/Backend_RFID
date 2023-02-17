const router = require("express").Router();
const userController = require("../controller/Card");

router.get("/getdatakartu", (req, res) => {
  userController
    .getAllUser()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
module.exports = router;
