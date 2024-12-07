const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

router.get("/", userController.testGet);

module.exports = router;

// router.get("/create", categoriesController.categoriesCreateGet);
// router.post("/create", categoriesController.categoriesCreatePost);

// router.get("/:id/update", categoriesController.categoriesUpdateGet);
// router.post("/:id/update", categoriesController.categoriesUpdatePost);

// router.post("/:id/delete", categoriesController.categoriesDeleteGet);



