const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const workoutController = require("../controllers/workoutController");

router.get("/", userController.testGet);

router.post("/signup", userController.registerUser);

router.post("/login", userController.approveUser);

router.post("/addWorkout", workoutController.workoutCreatePost);
router.post("/addExercise", workoutController.exerciseCreatePost);

module.exports = router;

// router.get("/create", categoriesController.categoriesCreateGet);
// router.post("/create", categoriesController.categoriesCreatePost);

// router.get("/:id/update", categoriesController.categoriesUpdateGet);
// router.post("/:id/update", categoriesController.categoriesUpdatePost);

// router.post("/:id/delete", categoriesController.categoriesDeleteGet);
