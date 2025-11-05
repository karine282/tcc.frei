import con from "./Conection.js";

export default async function salvarContato(nome, email, mensagem) {
  const comando = ` 
  INSERT INTO  contatos (nome, email, mensagem) VALUES (?, ?, ?);`
  
 const[resposta]= await con.query(comando,[nome,email,mensagem]);
 return resposta;
}
