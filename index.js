const express = require('express')
const app = express()
const axios = require("axios");


require('dotenv').config();


const token = process.env.BOT_TOKEN
const chatId = process.env.CHAT_ID 


async function sendTelegramMessage(message){
	const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`

	axios.get(url)
}


async function chatGPTRequest() {
	await axios.post('https://free.churchless.tech/v1/chat/completions', {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Me fale uma curiosidade legal sobre a inglaterra.' }]
}, {
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
	const result = response.data
	const message = result.choices[0].message.content
	sendTelegramMessage(message)
})
}



app.post('/try',(req, res) => {
	const update = req.body;
	const mensagem = update.message.text; // Obter o texto da mensagem

    // Processar a mensagem ou realizar ações com base nela

    console.log('Mensagem recebida:', mensagem);

})


app.listen(3987)




