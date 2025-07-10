async function caractersPermitidos(){
     let permitidos  = []

     if(process.env.UPPERCASE_LETTERS === 'true')
        permitidos.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    

    if(process.env.LOWERCASE_LETTERS === 'true')
        permitidos.push(... "abcdefghijklmnopqrstuvwxyz")


    if(process.env.NUMBERS === 'true')
        permitidos.push(... "0123456789")
   
    if(process.env.SPECIAL_CHARACTERS === 'true')
        permitidos.push(... "!@#$%^&*()_+[]{}|;:,.<>?`~")

    return permitidos
}



async function handle(){
    let caracters = []
    let senha = ''

    const tamahnoSenha = process.env.PASSWORD_LENGTH;

    caracters = await caractersPermitidos()

   
    for (let i = 0; i < tamahnoSenha; i++) {
        const index = Math.floor(Math.random() * caracters.length)
        senha += caracters[index]
    }

    return senha;
}

export default handle;