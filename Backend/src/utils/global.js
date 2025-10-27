import horaAtual from "./datetimes.js"

global.criarErro = function criarErro(err) {
    let obj = {
        erro: err.message
    }

    return obj;
}

global.logErro = function logErro(err) {
    console.log(horaAtual() + "ERROR ==> " + err.message);
}

