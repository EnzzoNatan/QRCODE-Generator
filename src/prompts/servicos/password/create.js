import chalk from "chalk"
import handle from "./handle.js"

async function criarSenha(){
    console.log(chalk.green("Senha criada com sucesso!"))

    const senha = await handle()
    console.log(chalk.blue.italic(senha))
}



export default criarSenha