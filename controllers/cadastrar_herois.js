let lista_herois = [
    { id: 1, nome: 'Spider-man', pontosDePoder: 90 },
    { id: 2, nome: 'Iron-man', pontosDePoder: 200 },
]

exports.lista_herois = lista_herois;

exports.listaHerois = (req, res) => {
    res.status(200).send(lista_herois);
}

exports.herois = (req, res) => {
    const novoHeroi = req.body;
    lista_herois.push(novoHeroi);
    res.status(201).send({ mensagem: 'Herói adicionado!' });
}

exports.editarHeroi = (req, res) => {
    const id = Number(req.params.id);
    const editar = req.body;

    lista_herois = lista_herois.map((heroi) => heroi.id === id ? editar : heroi);
    res.status(200).send({ mensagem: 'Informação alterada!' });
}

exports.deletarHeroi = (req, res) => {
    const id = Number(req.params.id);

    lista_herois = lista_herois.filter((heroi) => heroi.id !== id);
    res.status(200).send({ mensagem: 'Herói deletado!' });
}
