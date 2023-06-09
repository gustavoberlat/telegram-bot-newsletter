const express = require('express')
const app = express()
const axios = require("axios");

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 

require('dotenv').config();


const token = process.env.BOT_TOKEN
const chatId = process.env.CHAT_ID 


async function sendTelegramMessage(message){
	const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`

	axios.get(url)
}


async function chatGPTRequest(theme) {
	message = `Crie um texto em modelo de newsletter sobre o tema ${theme} com:  
	-3 paragrafos. 
	eu preciso que você adicione o %0A todas  as vezes que voce for pular uma linha no texto. Como se fosse um \n. por favor.
	-comprimente o leitor 
	-fale em uma linguagem mediana, não muito formal nem muito informal
	-coloque a data 
	`
	
	await axios.post('https://free.churchless.tech/v1/chat/completions', {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: message }]
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
    const theme = req.body.message.text;
    res.send({"fail": false}).status(200)
    chatGPTRequest(theme)
})


app.listen(3987)




