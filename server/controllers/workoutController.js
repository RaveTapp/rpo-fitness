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


module.exports = {
    workoutCreatePost,
};