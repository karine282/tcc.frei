import bcrypt from "bcrypt";

export async function gerarHashSenha(senha, saltRounds = 10) {
  try {
    const hash = await bcrypt.hash(senha, saltRounds);
    return hash;
  } catch (erro) {
    console.error("Erro ao gerar hash de senha:", erro);
    throw new Error("Erro ao processar senha.");
  }
}

const novaSenha = "admgeotccfrei";
gerarHashSenha(novaSenha).then(hash => console.log("Hash gerado:", hash));