require('dotenv').config();
const usersModel = require('./users-model');

class usersService {
    async add(name, score) {
        await usersModel.findOneAndUpdate(
            { name }, // Условие поиска
            { score }, // Данные для обновления
            { upsert: true } // Опции: upsert - создать, если не найдено; new - вернуть обновлённый документ
        );
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