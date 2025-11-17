import con from "./Conection.js";

export async function SalvarContato(nome, email, mensagem) {
  const comando = `
    INSERT INTO contato (nome, email, mensagem)
    VALUES (?, ?, ?)
  `;

  const [result] = await con.query(comando, [nome, email, mensagem]);

  return result;
}
