import chalk from "chalk"


const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow.italic("Digite o link que deseja gerar o QRCODE"),
    },
    {
        name:"type",
        description:chalk.yellow.italic ("Escolha entre o tipo de (1-NORMAL) ou (2-TERMINAL)"),
        pattern: /^[1-2]$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default promptQRCode