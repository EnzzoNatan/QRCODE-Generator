import prompt from 'prompt'

import mainPrompt from './prompts/prompt-main.js'
import createQRCode from './prompts/qr-code/create.js'


async function main(){
    prompt.get(mainPrompt, async(err, result)=>{
        if(result.select == 1 ) await createQRCode();
        if(result.select == 2 ) console.log('Escolheu SENHA')
    })
    
prompt.start()
}

main()