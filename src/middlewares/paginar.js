import RequisicaoIncorreta from "../Errors/RequisicaoIncorreta.js";

async function paginar(req, res, next) {
  try {
    // let { limite = 2, pagina = 1, campoOrdenacao = "_id", ordem = -1 } = req.query;
    let { limite = 2, pagina = 1, ordenacao = "_id:-1" } = req.query;

    let [campoOrdenacao, ordem] = ordenacao.split(":");

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    const resultado = req.resultado;

    if (limite >= 0 && pagina >= 0) {
      (limite > 10) ? limite = 5 : limite;

      const resultadoPaginado = await resultado.find()
        .sort({ [campoOrdenacao]: ordem })
        .skip(limite * (pagina - 1))
        .limit(limite)
        // .populate("autor")
        .exec();
      res.status(200).json(resultadoPaginado);
    } else {
      next(new RequisicaoIncorreta("Limite e Pagina devem ser maior que 0."));
    }
  } catch (erro) {
    next(erro);
  }
}

export default paginar;
