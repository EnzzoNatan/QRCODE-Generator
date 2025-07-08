import qr from "qrcode-terminal"
import chalk from "chalk"

async function handler(err, result) {
    if(err){
        console.log('Erro na aplicação:');
        return
    }

    const ehPequeno =  result.type == 2;
    qr.generate(result.link,{small:ehPequeno}, (qrcode) => {
      console.log(chalk.green.bold("QR Code gerado com sucesso: \n"))
      console.log(qrcode)
    })
}

export default handler;