const db = require("../db/queries");

const workoutCreatePost = async (req, res) => {
    try {
      const { name, user } = req.body;
      await db.addWorkout(name, user);
      res.status(200).json({ message: "Uspešno dodana vadba" });
    } catch (error) {
      res.status(500).json({ error: "Napaka, neuspešno dodajanje vadbe" });
    }
};

const exerciseCreatePost = async (req, res) => {
  try {
    const { name, desc } = req.body;
    await db.addExercise(name, desc);
    res.status(200).json({ message: "Uspešno dodana vaja" });
  } catch (error) {
    res.status(500).json({ error: "Napaka, neuspešno dodajanje vaje" });
  }
};


module.exports = {
    workoutCreatePost,
    exerciseCreatePost,
};