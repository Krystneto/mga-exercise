const submitButton = document.body.querySelector('#submit');
const fullNameInput = document.body.querySelector('#full_name');
const mobilePhoneInput = document.body.querySelector('#mobile_phone');
const stateInput = document.body.querySelector("#state");
const questionInput = document.body.querySelector("#question");

const container = document.body.querySelector('.container');
const contactForm = document.body.querySelector('.contact_form');
const fullNameClass = document.body.querySelector('.full_name');
const mobilePhoneClass = document.body.querySelector('.mobile_phone');
const stateClass = document.body.querySelector('.state');
const questionClass = document.body.querySelector('.question');



function invalidNameField() {
    let node = document.createElement('p');
    let fullNameRequiredText = 'Full Name is a required field.' 
    fullNameInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = fullNameRequiredText;
    fullNameClass.appendChild(node)
}

function invalidMobilePhoneField() {
    let node = document.createElement('p');
    let mobilePhoneRequiredText = 'Please enter a valid phone number.';
    // mobilePhoneInput.style.background  = "#FDE3DF url('./assets/warning_icon.png') right no-repeat 10px"
    mobilePhoneInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = mobilePhoneRequiredText;
    mobilePhoneClass.appendChild(node);
}

function invalidStateField() {
    let node = document.createElement('p');
    let stateRequiredText = 'State is a required field.'    
    stateInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = stateRequiredText
    stateClass.appendChild(node)
}

function invalidQuestionField() {
    let node = document.createElement('p');
    let descriptionRequiredText = 'Description is a required field.'    
    questionInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = descriptionRequiredText
    questionClass.appendChild(node);
}

function californiaPurchasedItemSelect() {
    let div = document.createElement('div');
    div.className = "select_california"
    div.innerHTML = "<span>Was your item purchased in CA?:<sup>*</sup></span>"
    let selectNode = document.createElement('select')
    let options = ["Select one", "Yes", "No"]
        options.map(function(x) {
            let optionNode = document.createElement('option')
            optionNode.value = x
            optionNode.text = x
            selectNode.appendChild(optionNode);
        })
    div.appendChild(selectNode);
    contactForm.insertBefore(div, contactForm.childNodes[6]);
}

function isValidFullName(name) {
    let isValid = /\w+\s\w+/.test(name)
    isValid ? true : invalidNameField()  
}

function isValidPhoneNumber(number) {
    let isValid = /^\d{3}-\d{3}-\d{4}$/.test(number)
    isValid ? true : invalidMobilePhoneField()
}

function isValidState(state) {
    state === "Select one" ? invalidStateField() : true;
    state === "California" ? californiaPurchasedItemSelect() : true; 
}

function isValidQuestion(question) {
    let isValid = /\w+/.test(question);
    isValid ? true : invalidQuestionField() 
}

function successOnValidation() {
    let thankYouText = 'Thank you! ';
    let recievedText = '<h2>We have received your message and will reach out to you as soon as humanly possible</h2>';
    container.children[0].innerHTML = thankYouText + recievedText
    contactForm.parentNode.removeChild(contactForm);
}

function widgetValidation() {
    isValidFullName(fullNameInput.value)
    isValidPhoneNumber(mobilePhoneInput.value) 
    isValidState(stateInput.value)
    isValidQuestion(questionInput.value)

    // if (
    //     isValidFullName(fullNameInput.value) &&
    //     isValidPhoneNumber(mobilePhoneInput.value) &&
    //     isValidState(stateInput.value) &&
    //     isValidQuestion(questionInput.value)
    // ) return successOnValidation()
}
// function something() {
//     invalidNameField()
//     invalidMobilePhoneField()
//     invalidStateField()
//     invalidQuestionField()
// }






submitButton.addEventListener('click', widgetValidation);
