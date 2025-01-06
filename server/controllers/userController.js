const db = require("../db/queries");
const jwt = require("jsonwebtoken");

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
    await db.addUser(name, email, password); //klices querry queries.js
    res.status(200).json({ message: "Uporabnik se je uspesno prijavil" });
  } catch (error) {
    res.status(500).json({ error: "Uporabnik se ni uspesno prijavil" });
  }
};

const createToken = (user) => {
  try {
    const token = jwt.sign({ email: user.email }, "tempKey", {
      expiresIn: "1h",
    });
    console.log("Token ustvarjen:", token);
    return token;
  } catch (error) {
    console.error("Napaka pri ustvarjanju žetona:", error);
    throw error;
  }
};

const setCookie = (res, token, age) => {
  res.cookie("authToken", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: age,
  });
  console.log("Piškotek nastavljen");
};

const approveUser = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

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
    const token = createToken(user);

    let age;
    if (rememberMe) {
      age = 365 * 24 * 60 * 60 * 1000;
    } else {
      age = 3600000;
    }

    setCookie(res, token, age);

    res.status(200).json({
      message: "Uspešna prijava",
      user: { email: user.email },
    });
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


// main funkcije, za vracanje statusov v main program na front-end, tu tudi klices svoje inserte pa selecte iz baze