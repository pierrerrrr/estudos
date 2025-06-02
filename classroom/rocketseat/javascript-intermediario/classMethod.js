class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // criando um método dentro da classe
    sendEmail() {
        console.log("e-mail enviado para", this.name, "no e-mail", this.email)
    }
}

const user = new User("Pierre", "pierrestorniolo@gmail.com")

// utilizando o método
user.sendEmail()