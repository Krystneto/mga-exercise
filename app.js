const submitButton = document.body.querySelector('#submit');
const fullNameInput = document.body.querySelector('#full_name');
const mobliePhoneInput = document.body.querySelector('#mobile_phone_number');
const stateInput = document.body.querySelector("#state");
const questionInput = document.querySelector("#question");

const fullNameClass = document.body.querySelector('.full_name');
const mobilePhoneClass = document.body.querySelector('.mobile_phone');
const stateClass = document.body.querySelector('.state');
const questionClass = document.body.querySelector('.question');

function invalidNameField() {
    let node = document.createElement('p');;
    let fullNameRequiredText = 'Full Name is a required field.' 
    node.className = 'isRequired'
    node.innerText = fullNameRequiredText;
    fullNameClass.appendChild(node)
}

function invalidMobilePhoneField() {
    let node = document.createElement('p');;
    let mobilePhoneRequiredText = 'Please enter a valid phone number.';
    node.className = 'isRequired'
    node.innerText = mobilePhoneRequiredText;
    mobilePhoneClass.appendChild(node);
}

function invalidStateField() {
    let node = document.createElement('p');;
    let stateRequiredText = 'State is a required field.'    
    node.className = 'isRequired'
    node.innerText = stateRequiredText
    stateClass.appendChild(node)
}

function invalidQuestionField() {
    let node = document.createElement('p');;
    let descriptionRequiredText = 'Description is a required field.'    
    node.className = 'isRequired'
    node.innerText = descriptionRequiredText
    questionClass.appendChild(node);
}

function isValidFullName(value) {

}

function isValidPhoneNumber(value) {

}

function isValidState(value) {

}

function isValidQuestion(value) {

}

function widgetValidation() {

}

function something() {
    invalidNameField()
    invalidMobilePhoneField()
    invalidStateField()
    invalidQuestionField()
}






submitButton.addEventListener('click', something);
