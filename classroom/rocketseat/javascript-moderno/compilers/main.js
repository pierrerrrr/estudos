class User {
    constructor({ email }) {
        this.email = email
    }

    sendMessage() {
        console.log("mensagem enviada para", this.email)
    }
}

let user = new User({ email: "pierrestorniolo@gmail.com" })
user.sendMessage()