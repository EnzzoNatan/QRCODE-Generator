async function handle(){
    let caracters = []
    let senha = ''

    const tamahnoSenha = process.env.PASSWORD_LENGTH;

    if(process.env.UPPERCASE_LETTERS === 'true'){
        caracters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(process.env.LOWERCASE_LETTERS === 'true'){
        caracters.push(... "abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS === 'true'){
        caracters.push(... "0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS === 'true'){
        caracters.push(... "!@#$%^&*()_+[]{}|;:,.<>?`~")
    }

    for (let i = 0; i < tamahnoSenha; i++) {
        const index = Math.floor(Math.random() * caracters.length);
        senha += caracters[index]
    }

    return senha;
}

export default handle;