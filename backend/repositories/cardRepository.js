const { Cartao } = require('../models');
const { Raia } = require('../models');

exports.getAllCards = async () => {
    const allCards = await Cartao.findAll();
    return allCards;
}

exports.getFromColumn = async (id) => {
    const byColumn = await Cartao.findAll({
        where: {
            id_raia: id
        }
    });
    return byColumn;
}

exports.createCard = async (body) => {
    console.log("log criação");
    const newCard = await Cartao.create(body);
    return newCard;
}

exports.updateCard = async (body) => {
    const updatedCard = await Cartao.update(body, {
        where: {
            id: body.id
        }
    });
    return updatedCard;
}

exports.deleteCard = async (id) => {
    const deletedCard = await Cartao.destroy({
        where: {
            id: id
        }
    });
    return deletedCard;
}