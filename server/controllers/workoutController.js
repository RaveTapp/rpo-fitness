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

const workoutDeletePost = async (req, res) => {
  try {
    const { name } = req.body;
    await db.deleteWorkout(name);
    res.status(200).json({ message: "Uspešno odstranjena vadba" });
  } catch (error) {
    res.status(500).json({ error: "Napaka, neuspešno odstranjevanje vadbe" });
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

const getTable = async (req, res) => {
  try {
    const { name } = req.body;
    const rows = await db.getAll(name);
    res.status(200).json({ rows });
  } catch (error) {
    res.status(500).json({ error: "Napaka, neuspešno pridobivanje tabele" });
  }
};




module.exports = {
    workoutCreatePost,
    workoutDeletePost,
    exerciseCreatePost,
    getTable,
};