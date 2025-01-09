const db = require("../db/queries");
const jwt = require("jsonwebtoken");

//Test
const testGet = async (req, res) => {
  res.json({ test: ["1", "2", "3"] });
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


/////////////////////////////// NIK K
const addBMIRecord = async (req, res) => {
  try {
    const { userId, teza, visina } = req.body;

    if (!userId || !teza || !visina) {
      return res.status(400).json({ error: "Manjkajo podatki" });
    }

    await db.addBMIRecord(userId, teza, visina);
    res.status(200).json({ message: "BMI zapis uspešno dodan" });
    res.status(200).json({message: userId, teza, visina});

  } catch (error) {
    console.error("Napaka pri dodajanju BMI zapisa:", error);
    res.status(500).json({ error: "Napaka na strežniku" });
  }
};


module.exports = {
  testGet,
  registerUser,
  approveUser,
  addBMIRecord
};

// main funkcije, za vracanje statusov v main program na front-end, tu tudi klices svoje inserte pa selecte iz baze
