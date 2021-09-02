const socket = io('http://localhost:3000')

const name = prompt('What is your name?')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
 socket.on("obj1",(msg)=> {
  console.log(msg);
})
socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  let date_entered = new Date()
  appendMessage(`You: ${message}`)
  appendMessage(`Server: Hello ${name}! What brings you in today?    ${date_entered}`)
 //appendMessage(`Date ${date_entered}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}
function appendMessage1(name) {
    const messageElement = document.createElement('div')
    messageElement.innerText = name
    messageContainer.append(messageElement)
}
