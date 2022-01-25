const User = require('../config/mongoose')

class User {
    constructor({ name, email, birthday, created_at, update_at }) {
        const user = new User({
            name: this.name = name,
            email: this.email = email,
            birthday: this.birthday = birthday,
            created_at: this.created_at = created_at,
            update_at: this.update_at = update_at
        })

        if (!user) return;
        return user;
    }
}

module.exports = User
