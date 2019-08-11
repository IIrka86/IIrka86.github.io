/////////All config object/////////
let tsChatConfig = {
    title: "xxx",
    botName: "yyy",
    chatUrl: "http://...",
    cssClass: "ts-chat",
    position: "right",
    allowMinimize: false,
    allowDrag: true,
    showDateTime: false,
    requireName: false,
    request: "fetch"
};

//////Main fieldset of the page/////////////
var configFieldset = document.createElement('fieldset');
configFieldset.id = 'chat-config';
configFieldset.innerHTML = '<legend>Chat configuration</legend>';
document.body.appendChild(configFieldset);

//////Create all elements and put them into main fieldset///////
var chatTitle = createInputWrapper('text','chatTitle', tsChatConfig.title);
var botName = createInputWrapper('text', 'botName', tsChatConfig.botName);
var chatUrl = createInputWrapper('text', 'chatUrl', tsChatConfig.chatUrl);
var cssClass = createInputWrapper('text','cssClass', tsChatConfig.cssClass);
var selectForPosition = ['left','right'];
var chatPosition = createSelectGroup(selectForPosition, 'position', tsChatConfig.position);
var allowMinimize = createInputWrapper('checkbox','allowMinimize', tsChatConfig.allowMinimize, 'Allow to minimize');
var allowDrag = createInputWrapper('checkbox','allowDrag', tsChatConfig.allowDrag, 'Allow drag');
var requireName = createInputWrapper('checkbox','requireName',tsChatConfig.requireName, 'Require name');
var showDateTime = createInputWrapper('checkbox','showDateTime',tsChatConfig.requireName, 'Show date/time');
var radioForNetwork = ['XHR','fetch'];
var network = createRadioGroup(radioForNetwork,'request', tsChatConfig.request);
var code = document.createElement('div');
code.innerHTML = getCode();
var configForm = document.createElement('form');

addFormChild('Chat title', chatTitle);
addFormChild('Bot name', botName);
addFormChild('Chat URL', chatUrl);
addFormChild('CSS class', cssClass);
addFormChild('Position', chatPosition);
addFormChild('UI', allowMinimize);
addFormChild('', allowDrag);
addFormChild('', requireName);
addFormChild('', showDateTime);
addFormChild('Network', network);
addFormChild('Use next code:', code );
addFormChild('', code);
configFieldset.appendChild(configForm);

function addFormChild(labelName, divChild) {
    var childDiv = document.createElement('div');
    childDiv.className = 'config-div';
    childDiv.innerHTML = '<div class="config-label inline"><label>' + labelName + '</label></div>' ;
    var element = document.createElement('div');
    element.className = 'inline';
    element.appendChild(divChild);
    childDiv.appendChild(element);
    configForm.appendChild(childDiv);
}

function getCode() {
    return '<p>&lt script &gt</p>' +
        '<p>(function(){</p>' +
        '<p class="tab">new tsChat({</p>' +
        '<p class="double-tab">title: \'' + tsChatConfig.title + '\',</p>' +
        '<p class="double-tab">botName: \'' + tsChatConfig.botName + '\',</p>' +
        '<p class="double-tab">chatUrl: \'' + tsChatConfig.chatUrl + '\',</p>' +
        '<p class="double-tab">cssClass: \'' + tsChatConfig.cssClass + '\',</p>' +
        '<p class="double-tab">position: \'' + tsChatConfig.position + '\',</p>' +
        '<p class="double-tab">allowMinimize: ' + tsChatConfig.allowMinimize + ',</p>' +
        '<p class="double-tab">allowDrag: ' + tsChatConfig.allowDrag + ',</p>' +
        '<p class="double-tab">showDateTime: ' + tsChatConfig.showDateTime + ',</p>' +
        '<p class="double-tab">requireName: ' + tsChatConfig.requireName + ',</p>' +
        '<p class="double-tab">request: \'' + tsChatConfig.request + '\',</p>' +
        '<p class="tab">});</p>' +
        '<p>})();</p>' +
        '<p>&lt script &gt</p>';
}

function createInputWrapper(type, id, value, labelName) {
    var element = document.createElement('div');
    var input = createInput(type,id,value);
    element.appendChild(input);
    if(labelName){
        element.appendChild(createLabelForElement(id, labelName))
    }
    if(type === 'checkbox'){
        input.checked = value;
    }
    return element;
}

function createInput(type, id, value,) {
    var input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.value = value;
    return input;
}

function createLabelForElement(inputId, labelName) {
    var label = document.createElement('label');
    label.for = inputId;
    label.innerHTML = labelName;
    return label;
}

function createRadioGroup(radioArr, name, value) {
    var divForRadioGroup = document.createElement('div');
    radioArr.forEach(function (radioName) {
        var input = createInput('radio', radioName, radioName);
        input.name = name;
        if(radioName === value){
            input.checked = true;
        }
        divForRadioGroup.appendChild(input);
        divForRadioGroup.appendChild(createLabelForElement(radioName, radioName));
    });
    return divForRadioGroup;
}

function createSelectGroup(selectArr, selectId, value) {
    var selectGroup = document.createElement('select');
    selectGroup.id = selectId;
    selectArr.forEach(function (optionName) {
        var option = document.createElement('option');
        option.id = optionName;
        option.value = optionName;
        option.innerHTML = optionName;
        if(optionName === value){
            option.selected = true;
        }
        selectGroup.appendChild(option);
    });
    return selectGroup;
}


chatTitle.addEventListener('change',function () {
    tsChatConfig.title = document.getElementById('chatTitle').value;
    code.innerHTML = getCode();
});
botName.addEventListener('change',function () {
    tsChatConfig.botName = document.getElementById('botName').value;
    code.innerHTML = getCode();
});
cssClass.addEventListener('change',function () {
    tsChatConfig.cssClass = document.getElementById('cssClass').value;
    code.innerHTML = getCode();
});
chatUrl.addEventListener('change',function () {
    tsChatConfig.chatUrl = document.getElementById('chatUrl').value;
    code.innerHTML = getCode();
});
chatPosition.addEventListener('change',function () {
     var select = document.getElementById('position');
    tsChatConfig.position = select.options[select.selectedIndex].value;
    code.innerHTML = getCode();
});
allowMinimize.addEventListener('change',function () {
    tsChatConfig.allowMinimize = document.getElementById('allowMinimize').checked;
    code.innerHTML = getCode();
});
allowDrag.addEventListener('change',function () {
    tsChatConfig.allowDrag = document.getElementById('allowDrag').checked;
    code.innerHTML = getCode();
});
requireName.addEventListener('change',function () {
    tsChatConfig.requireName = document.getElementById('requireName').checked;
    code.innerHTML = getCode();
});
showDateTime.addEventListener('change',function () {
    tsChatConfig.showDateTime = document.getElementById('showDateTime').checked;
    code.innerHTML = getCode();
});
network.addEventListener('change',function () {
    tsChatConfig.request = document.querySelector("input[type=radio]:checked").value;
    code.innerHTML = getCode();
});