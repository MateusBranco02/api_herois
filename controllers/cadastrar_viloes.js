let lista_viloes = [
    { id: 1, nome: 'Thanos', pontosDePoder: 190 }
]

exports.lista_viloes = lista_viloes;

exports.listaViloes = (req, res) => {
    res.status(200).send(lista_viloes);
}

exports.viloes = (req, res) => {
    const novoVilao = req.body;
    lista_viloes.push(novoVilao);
    res.status(201).send({ mensagem: 'Vilão adicionado!' });
}

exports.editarVilao = (req, res) => {
    const id = Number(req.params.id);
    const editar = req.body;

    lista_viloes = lista_viloes.map((vilao) => vilao.id === id ? editar : vilao);
    res.status(200).send({ mensagem: 'Informação alterada!' });
}

exports.deletarVilao = (req, res) => {
    const id = Number(req.params.id);

    lista_viloes = lista_viloes.filter((vilao) => vilao.id !== id);
    res.status(200).send({ mensagem: 'Vilão delatado!' });
}
