import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(message = "Um ou mais dados esão incorretos") {
    super(message, 400);
  }

  enviarResposta(res) {
    res.status(this.status).send({
      message: this.message,
      status: this.status
    });
  }
}

export default RequisicaoIncorreta;