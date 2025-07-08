import chalk from "chalk"

const mainPrompt =[
    {
        name: "select",
        description: chalk.green.bold("Escolha a ferramenta (1 - Gerar QRCODE) ou (2 - Gerar senha)"),
        pattern: /^[1-2]$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
        
    }
]

export default mainPrompt