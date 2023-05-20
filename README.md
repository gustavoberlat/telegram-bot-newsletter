# telegram-bot-newsletter
<b>Esse é um projeto que utiliza a API do CHATGPT para criar um texto em modelo de newsletter e disparar em um grupo do telegram. 
</b>




Para utilizar você vai precisar de
- Um bot de telegram
- Um grupo ou canal de Telegram
- Um local para hospedar o codigo - precisa ser um ip publico para o webhook do telegram encontrar - 

eu recomendo utilizar a versão gratuita do <a href="https://render.com"> render.com<a>  

# Uso: 
<h3>enviando mensagem no Bot:</h3>
  
![image](https://github.com/gustavoberlat/telegram-bot-newsletter/assets/59585859/01aeb721-d125-4f95-ac53-b509f87e9352)

<h3>O texto sendo enviado no Grupo:</h3>

![image](https://github.com/gustavoberlat/telegram-bot-newsletter/assets/59585859/e0f2b56c-5733-4170-9a79-0a4d578f4024)


  
  
<h2>Configurando</h2> 
 
 <h3>Setando o WebHook</h3> 
<code>https://api.telegram.org/bot{TOKEN}/setWebhook?url={WEBHOOK_URL}</code>
  
 <h3>Configurando o .env</h3>

  BOT_TOKEN= //adicione aqui o token do bot<br> 
  CHAT_ID=  //adicione aqui o id do grupo
 


