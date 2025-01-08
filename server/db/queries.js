const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table} ORDER BY id`);
  return rows;
}

async function getAllLimitOffset(table, limit, offset) {
  const { rows } = await pool.query(`SELECT * FROM ${table} ORDER BY id limit ${limit} offset ${offset}`);
  return rows;
}

//CATEGORY
async function addCategory(category) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [category]);
}

async function getCategory(id) {
  const { rows } = await pool.query("SELECT * FROM category WHERE id=($1)", [
    id,
  ]);
  return rows[0];
}

async function updateCategory(id, name) {
  await pool.query("UPDATE category SET name = ($1) WHERE id = ($2)", [
    name,
    id,
  ]);
}

async function deleteCategory(id) {
  try {
    await pool.query("DELETE FROM category WHERE id=($1)", [id]);
  } catch (error) {
    if (error.message.includes("product_fk_category_fkey")) {
      console.log("Cannot delete category with items!");
    }
  }
}

//PRODUCT
async function getProduct(productId) {
  const { rows } = await pool.query("SELECT * FROM product WHERE id=($1)", [
    productId,
  ]);
  return rows[0];
}

async function getProducts(categoryId) {
  const { rows } = await pool.query(
    "SELECT * FROM product WHERE fk_category=($1)",
    [categoryId]
  );
  return rows;
}

async function addProductInCategory(categoryId, productName) {
  await pool.query("INSERT INTO product (name, fk_category) VALUES ($1, $2)", [
    productName,
    categoryId,
  ]);
}

async function updateProduct(id, name) {
  await pool.query("UPDATE product SET name = ($1) WHERE id = ($2)", [
    name,
    id,
  ]);
}

async function deleteProduct(id) {
  await pool.query("DELETE FROM product WHERE id=($1)", [id]);
}

async function addUser(name, email, password) {
  try {
    await pool.query(
      "INSERT INTO uporabnik (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    console.log("User added to database");
  } catch (error) {
    console.error("Error adding user to database:", error);
  }
}

async function getEmail(email) {
  const result = await pool.query("SELECT * FROM uporabnik WHERE email = $1", [
    email,
  ]);
  return result.rows[0] || null;
}

//Workout

async function addWorkout(name, user) {
  try {
    await pool.query(
      "INSERT INTO vadba (ime, fk_uporabnik) VALUES ($1, $2)",
      [name, user]
    );
    console.log("Workout added to database");
  } catch (error) {
    console.error("Error adding workout to database:", error);
  }
}

async function addExercise(name, desc) {
  try {
    await pool.query(
      "INSERT INTO vaja (ime, opis) VALUES ($1, $2)",
      [name, desc]
    );
    console.log("Exercise added to database");
  } catch (error) {
    console.error("Error adding exercise to database:", error);
  }
}

async function deleteWorkout(name) {
  try {
    await pool.query("DELETE FROM vadba WHERE id=(SELECT id FROM vadba WHERE ime=$1)", [name]);
  } catch (error) {
    console.error("Error removing workout from database:", error); 
  }
}

async function deleteExercise(name) {
  try {
    await pool.query("DELETE FROM vaja WHERE id=(SELECT id FROM vaja WHERE ime=$1)", [name]);
  } catch (error) {
    console.error("Error removing exercise from database:", error); 
  }
}

async function editWorkout(name, oldName){
  try {
    await pool.query("UPDATE vadba SET ime=$1 WHERE id=(SELECT id FROM vadba WHERE ime=$2)", [name, oldName]);
  } catch (error) {
    console.error("Error removing exercise from database:", error); 
  }
}

async function editExercise(name, oldName){
  try {
    await pool.query("UPDATE vaja SET ime=$1 WHERE id=(SELECT id FROM vaja WHERE ime=$2)", [name, oldName]);
  } catch (error) {
    console.error("Error removing exercise from database:", error); 
  }
}

module.exports = {
  getAll,
  getAllLimitOffset,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getProduct,
  getProducts,
  addProductInCategory,
  updateProduct,
  deleteProduct,
  addUser,
  getEmail,
  addWorkout,
  addExercise,
  deleteWorkout,
  deleteExercise,
  editWorkout,
  editExercise,
};
