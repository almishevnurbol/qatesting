const uuid = require('uuid')
const path = require('path');
const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res, next) {
        try {
            let {basketId, deviceId} = req.body
            const basket = await BasketDevice.create({basketId, deviceId});

            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const {id} = req.params
        const basket = await BasketDevice.findAll(
            {
                where: {id},
                include: [{model: BasketDevice, as: 'basketId'}]
            },
        )
        return res.json(basket)
    }
}

module.exports = new BasketController()
