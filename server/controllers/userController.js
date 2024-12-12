const db = require("../db/queries");

const testGet = async (req, res) => {
  res.json({ test: ["1", "2", "3"] });
};

//const categories = await db.getAll("category");

const categoriesCreateGet = async (req, res) => {
  res.render("createCategory", {
    title: "Create category",
  });
};

const categoriesCreatePost = async (req, res) => {
  const { categoryName } = req.body;
  await db.addCategory(categoryName);
  res.redirect("/");
};

const categoriesUpdateGet = async (req, res) => {
  const category = await db.getCategory(req.params.id);
  res.render("updateCategory", {
    title: "Update category",
    category: category,
  });
};

const categoriesUpdatePost = async (req, res) => {
  const { categoryName } = req.body;
  await db.updateCategory(req.params.id, categoryName);
  res.redirect("/");
};

const categoriesDeleteGet = async (req, res) => {
  await db.deleteCategory(req.params.id);
  res.redirect("/");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await db.addUser(name, email, password);
    res.status(200).json({ message: "Uporabnik se je uspesno prijavil" });
  } catch (error) {
    res.status(500).json({ error: "Uporabnik se ni uspesno prijavil" });
  }
};

const approveUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Poišči uporabnika z email naslovom
    const user = await db.getEmail(email);
    if (!user) {
      return res
        .status(200)
        .json({ message: "Uporabnik s tem emailom ne obstaja" });
    }

    // Preveri geslo
    if (password !== user.password) {
      return res.status(200).json({ message: "Napačno geslo" });
    }

    // Uspesna prijava
    res.status(200).json({ message: "Uspešna prijava" });
  } catch (error) {
    console.error("Napaka pri preverjanju uporabnika:", error);
    res.status(500).json({ error: "Napaka na strežniku" });
  }
};

module.exports = {
  testGet,
  categoriesCreateGet,
  categoriesCreatePost,
  categoriesUpdateGet,
  categoriesUpdatePost,
  categoriesDeleteGet,
  registerUser,
  approveUser,
};
