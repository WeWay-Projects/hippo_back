require('dotenv').config();
const usersModel = require('./users-model');

class usersService {
    async add(name, score) {
        await usersModel.create({ name, score });
        return true;
    }

    async get() {
        const users = await usersModel.find()
            .sort({
                score: -1,
            })
            .limit(100);
        return users;
    }
}

module.exports = new usersService();