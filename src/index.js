import prompt from 'prompt'
import mainPrompt from './prompts/prompt-main.js'
async function main(){
    prompt.get(mainPrompt, async(err, result)=>{
        if(result.select == 1 ) console.log('Escolheu QRCODE')
        if(result.select == 2 ) console.log('Escolheu SENHA')
    })
    
prompt.start()
}

main()