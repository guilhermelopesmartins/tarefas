const repo = require('../repositories/cardRepository');

exports.getAllCards = () => {
    return repo.getAllCards();
}

exports.getFromColumn = (id) => {
    if (id == null)
        throw new Error('Coluna não informado.')
    return repo.getFromColumn(id);
}

exports.createCard = (body) =>{
    if (body == null)
        throw new Error('Quadro não informado.');
    if (body.titulo.trim().length === 0)
        throw new Error('Titulo do quadro não informado.');

    return repo.createCard(body);
}

exports.updateCard = (body) => {
    if (body == null)
        throw new Error('Quadro não informado.');
    if (body.titulo.trim().length === 0)
        throw new Error('Titulo do quadro não informado.');
    
    return repo.updateCard(body);
}

exports.deleteCard = (id) => {
    if (id == null)
        throw new Error('Quadro não informado');
    
    return repo.deleteCard(id);
}