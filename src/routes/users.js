const router = require('express').Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', userController.formView);

module.exports = router;
