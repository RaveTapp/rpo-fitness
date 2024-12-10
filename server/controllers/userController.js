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

module.exports = {
  testGet,
  categoriesCreateGet,
  categoriesCreatePost,
  categoriesUpdateGet,
  categoriesUpdatePost,
  categoriesDeleteGet,
};
