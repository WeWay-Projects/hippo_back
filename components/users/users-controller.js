const usersService = require('./users-service');

class usersController {
    async add(req, res, next) {
        try {
            req.body = decrypt(req.body.data)
            const { name, score } = req.body;
            await usersService.add(name, score);
            return res.json('ok');
        } catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        try {
            const users = await usersService.get();
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new usersController();


const decrypt = (data) => {
    const reversedString = data.split('').reverse().join('');
    const jsonString = Buffer.from(reversedString, 'base64').toString('utf8');
    return JSON.parse(jsonString);
}
