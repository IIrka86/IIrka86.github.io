var fieldset = document.createElement('fieldset');
fieldset.id = 'chat-content';
fieldset.innerHTML = '<legend>Чат</legend>';
document.body.appendChild(fieldset);

var rollUpBtn = document.createElement('button');
rollUpBtn.id = 'roll-up';
rollUpBtn.innerHTML = '-';
fieldset.appendChild(rollUpBtn);

var content = document.createElement('div');
content.className = 'chat-content';
fieldset.appendChild(content);

var messages = document.createElement('div');
messages.className = 'messages-content';
content.appendChild(messages);

var form = document.createElement('div');
form.innerHTML = '<textarea name="message" id="message-text" cols="40" rows="6"></textarea>' +
                 '<button id="send-btn">Отправить</button>';
content.appendChild(form);

function getFieldsetMarginTop() {
    return window.innerHeight - fieldset.offsetHeight -15;
}
fieldset.setAttribute('style', 'margin-top:' + getFieldsetMarginTop() + 'px;');

rollUpBtn.onclick = function () {
    if(content.getAttribute('hidden') === ''){
        content.removeAttribute('hidden');
        rollUpBtn.innerHTML = ' - ';
    }else{
        content.setAttribute('hidden','');
        rollUpBtn.innerHTML = '[ ]';
    }
    fieldset.setAttribute('style', 'margin-top:' + getFieldsetMarginTop() + 'px;');
};

var sendButton = document.getElementById('send-btn');
var messageText = document.getElementById('message-text');
sendButton.onclick = function () {
    var text = messageText.value;
    messageText.value = '';
    addMessage(' Вы: ' + text);
    setTimeout(function () {
        addMessage(' Bot: Ответ на \"' + text.toUpperCase() + '\"');
    }, 1500)
};

function addMessage(message) {
    var messageString = document.createElement('p');
    var date = new Date();
    messageString.innerHTML = '' + date.getHours() + ':' + date.getMinutes() + message;
    messages.appendChild(messageString);
    fieldset.setAttribute('style', 'margin-top:' + getFieldsetMarginTop() + 'px;');
}