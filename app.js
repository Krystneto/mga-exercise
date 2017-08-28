const submitButton = document.body.querySelector('#submit');
const fullNameInput = document.body.querySelector('#full_name');
const mobilePhoneInput = document.body.querySelector('#mobile_phone');
const stateInput = document.body.querySelector('#state');
const questionInput = document.body.querySelector('#question');

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
    fullNameClass.appendChild(node);
    return false;
}

function invalidMobilePhoneField() {
    let node = document.createElement('p');
    let mobilePhoneRequiredText = 'Please enter a valid phone number.';
    // mobilePhoneInput.style.background  = "#FDE3DF url('./assets/warning_icon.png') right no-repeat 10px"
    mobilePhoneInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = mobilePhoneRequiredText;
    mobilePhoneClass.appendChild(node);
    return false;
}

function invalidStateField() {
    let node = document.createElement('p');
    let stateRequiredText = 'State is a required field.'    
    stateInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = stateRequiredText
    stateClass.appendChild(node)
    return false;
}

function invalidQuestionField() {
    let node = document.createElement('p');
    let descriptionRequiredText = 'Description is a required field.'    
    questionInput.className = 'warning_field'
    node.className = 'warning_text'
    node.innerText = descriptionRequiredText
    questionClass.appendChild(node);
    return false;
}

function californiaPurchasedItemSelect(event) {
    if (event.target.value === "California") {
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
}

function isValidFullName(name) {
    let isValid = /\w+\s\w+/.test(name)
    return isValid ? true : invalidNameField()  
}

function isValidPhoneNumber(number) {
    let isValid = /^\d{3}-\d{3}-\d{4}$/.test(number)
    return isValid ? true : invalidMobilePhoneField()
}

function isValidState(state) {
    return state !== "Select one" ? true : invalidStateField();
}

function isValidQuestion(question) {
    let isValid = /\w+/.test(question);
    return isValid ? true : invalidQuestionField() 
}

function successOnValidation() {
    let thankYouText = 'Thank you! ';
    let recievedText = '<h2>We have received your message and will reach out to you as soon as humanly possible</h2>';
    container.children[0].innerHTML = thankYouText + recievedText
    contactForm.parentNode.removeChild(contactForm);
}

function widgetValidation() {
    let a = isValidFullName(fullNameInput.value)
    let b = isValidPhoneNumber(mobilePhoneInput.value) 
    let c = isValidState(stateInput.value)
    let d = isValidQuestion(questionInput.value)
    

    if ( a && b && c && d) {
        return successOnValidation();
    } 
}



submitButton.addEventListener('click', widgetValidation);
stateInput.addEventListener('input', californiaPurchasedItemSelect)