// cirando um método estático

class User {
    // n precisa necessariamente ter construtor (constructor()), só quando for usar
    
    // método estático (static)
    static showMessage() {
        console.log("essa é uma mensagem")
    }
}

// const user = new User().showMessage()

User.showMessage()
