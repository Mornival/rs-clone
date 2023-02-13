const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('../service/mail-service');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw new Error(`Такой пачтовый адрес ${email} уже есть`);
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activetionLink = uuid.v4();
        const user = await UserModel.create({
            email,
            password: hashPassword,
            activetionLink
        });
        await mailService.sendActivationMail(email, activetionLink);
    }

}

module.exports = new UserService();