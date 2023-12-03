const cardService = require('../services/cardService');

/**
 * @swagger
 * tags:
 *   - name: Cards
 *     description: Endpoints relacionados aos cartões
 */

/**
 * @swagger
 * /cards:
 *   post:
 *     summary: Criar cartão
 *     description: Cria novo cartão
 *     tags:
 *       - Cards
 *     parameters:
 *       - name: body
 *         in: body
 *         description: card object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Cards'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Cria quadro
exports.createCard = async (req, res) => {
    try {
        const newCard = await cardService.createCard(req.body);
        res.json(newCard);
    } catch (err) {
        res.json(err.message);
    }
}

/**
 * @swagger
 * /cards:
 *   get:
 *     summary: Obter os cartões
 *     description: Obtem todos os cartões.
 *     tags:
 *       - Cards
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todos cartões
exports.getAllCards = async(req,res) => {
    try {
        const allCards = await cardService.getAllCards();
        res.json(allCards);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /cards/{id}:
 *   get:
 *     summary: Obter cartões das colunas
 *     description: Obtém todos cartões das colunas.
 *     tags:
 *       - Cards
 *     parameters:
 *       - in: query
 *         name: id_raia
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id da coluna
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todas os cartões das colunas
exports.getFromColumn = async(req,res) => {
    try {
        const id = req.query.id_raia;
        const cardsFromCard =  await cardService.getFromColumn(id);
        res.json(cardsFromCard);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /cards:
 *   put:
 *     summary: Atualizar cartão
 *     description: Atualiza cartão com base nos dado informados
 *     tags:
 *       - Cards
 *     parameters:
 *       - name: body
 *         in: body
 *         description: cards object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Cards'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Atualizar cartão
exports.updateCard = async(req, res) => {
    try {
        const updatedCard = await cardService.updateCard(req.body);
        res.json('Cartão atualizado');
    } catch (err) {
        res.json(err.message)
        
    }
}

/**
 * @swagger
 * /cards/{id}:
 *   delete:
 *     summary: Excluir cartão
 *     description: Exclui cartão pelo id.
 *     tags:
 *       - Cards
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id do cartão
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Excluir nota
exports.deleteCard = async(req, res) => {
    try {
        const id = req.query.id;
        const deletedCard = await cardService.deleteCard(id);
        res.json("Cartão excluido");
    } catch (err) {
        res.json(err.message)
    }
}