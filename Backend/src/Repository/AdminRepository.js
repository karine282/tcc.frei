import con from "./conection.js";

export const getAllUsers = async () => {
  const [rows] = await pool.query("SELECT id, nome, email, genero, cep FROM usuarios");
  return rows;
};

export const deleteUserById = async (id) => {
  const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
  return result.affectedRows;
};
