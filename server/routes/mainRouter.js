const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const workoutController = require("../controllers/workoutController");

router.get("/", userController.testGet);

//USER
router.post("/signup", userController.registerUser);

router.post("/login", userController.approveUser);

//WORKOUT & EXERCISE
router.post("/workouts", workoutController.getTable);
router.post("/exercises", workoutController.getTable);

router.post("/exercisesOffset", workoutController.getLimitOffsetTable);

router.post("/addWorkout", workoutController.workoutCreatePost);
router.post("/addExercise", workoutController.exerciseCreatePost);

router.post("/deleteWorkout", workoutController.workoutDeletePost);
router.post("/deleteExercise", workoutController.exerciseDeletePost);

router.post("/editWorkout", workoutController.workoutEditPost);
router.post("/editExercise", workoutController.exerciseEditPost);

module.exports = router;
