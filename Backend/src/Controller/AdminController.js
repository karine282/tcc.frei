import * as adminRepo from "../Repository/AdminRepository.js";

export const listarUsuarios = async (req, res) => {
  try {
    const users = await adminRepo.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

export const excluirUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await adminRepo.deleteUserById(id);
    if (!deleted) return res.status(404).json({ message: "Usuário não encontrado" });
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao excluir usuário" });
  }
};
