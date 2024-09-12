const { lista_herois } = require('./cadastrar_herois');
const { lista_viloes } = require('./cadastrar_viloes');

exports.batalhar = (req, res) => {
    idHeroi = Number(req.params.idHeroi);
    idVilao = Number(req.params.idVilao);

    const heroi = lista_herois.find((heroi) => heroi.id === idHeroi);
    const vilao = lista_viloes.find((vilao) => vilao.id === idVilao);

    if (heroi.pontosDePoder > vilao.pontosDePoder) {
        res.status(200).send({ batalha: `${heroi.nome} venceu ${vilao.nome}!` });
    } else if (heroi.pontosDePoder < vilao.pontosDePoder) {
        res.status(200).send({ batalha: `${vilao.nome} venceu ${heroi.nome}!` });
    } else if (heroi.pontosDePoder === vilao.pontosDePoder) {
        res.status(200).send({ batalha: `${heroi.nome} empatou com ${vilao.nome}` });
    } else {
        res.status(404).send({ mensagem: 'Herói e/ou Vilão não encontrado!' });
    }
}
