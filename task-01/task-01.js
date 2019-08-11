
var tsChat = document.createElement('div');
tsChat.id = 'ts-chat';
document.body.appendChild(tsChat);

var fieldset = document.createElement('fieldset');
fieldset.id = 'chat-content';
fieldset.innerHTML = '<legend>Чат</legend>';
tsChat.appendChild(fieldset);

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
form.innerHTML = '<textarea name="message" id="message-text" cols="40" rows="3"></textarea>' +
                 '<button id="send-btn">Отправить</button>';
content.appendChild(form);

function getFieldsetMarginTop() {
    return window.innerHeight - tsChat.offsetHeight -30;
}
function getFieldsetMarginLeft() {
    return window.innerWidth - tsChat.offsetWidth -20;
}
var chat = document.getElementById('ts-chat');
chat.style.top = getFieldsetMarginTop() + 'px';
chat.style.left = getFieldsetMarginLeft() + 'px';

rollUpBtn.onclick = function () {
    if(content.getAttribute('hidden') === ''){
        content.removeAttribute('hidden');
        rollUpBtn.innerHTML = ' - ';
    }else{
        content.setAttribute('hidden','');
        rollUpBtn.innerHTML = '[ ]';
    }
    chat.style.top = getFieldsetMarginTop() + 'px';
    chat.style.left = getFieldsetMarginLeft() + 'px';
    //tsChat.setAttribute('style', 'margin-top:' + getFieldsetMarginTop() + 'px;');
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
    //tsChat.setAttribute('style', 'top:' + getFieldsetMarginTop() + 'px;')
    //fieldset.setAttribute('style', 'margin-top:' + getFieldsetMarginTop() + 'px;');
}

tsChat.addEventListener('mousedown', function (e) {
//tsChat.onmousedown = function (e) {
    var chatElement = document.getElementById('ts-chat');

    var left = parseInt( window.getComputedStyle(chatElement).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(chatElement).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        chatElement.style.left = left - dx + "px";
        chatElement.style.top = top - dy + "px";
    };
});

tsChat.addEventListener('mouseup', function () {
//tsChat.onmouseup = function () {
    document.onmousemove = null;
});