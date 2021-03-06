const submitButton = document.body.querySelector('#submit');
const fullNameInput = document.body.querySelector('#full_name');
const mobilePhoneInput = document.body.querySelector('#mobile_phone');
const stateInput = document.body.querySelector('#state');
const questionInput = document.body.querySelector('#question');

const exitWidget = document.body.querySelector('.exit_widget');
const container = document.body.querySelector('.container');
const contactForm = document.body.querySelector('.contact_form');
const fullNameClass = document.body.querySelector('.full_name');
const mobilePhoneClass = document.body.querySelector('.mobile_phone');
const stateClass = document.body.querySelector('.state');
const questionClass = document.body.querySelector('.question');


// Functions to run when a field is invalid
function invalidNameField() {
    if (fullNameInput.className !== 'warning_field') {
        let node = document.createElement('p');
        let fullNameRequiredText = 'Full Name is a required field.'; 
        fullNameInput.className = 'warning_field';
        node.className = 'warning_text';
        node.innerText = fullNameRequiredText;
        fullNameClass.appendChild(node);
        return false;
    } else {
        return fullNameInput.classList.remove('warning_field');
    }
}

function invalidMobilePhoneField() {
    if (mobilePhoneInput.className !== 'warning_field') {
        let node = document.createElement('p');
        let mobilePhoneRequiredText = 'Please enter a valid phone number.';
        mobilePhoneInput.className = 'warning_field';
        node.className = 'warning_text';
        node.innerText = mobilePhoneRequiredText;
        mobilePhoneClass.appendChild(node);
        return false;
    }
}

function invalidStateField() {
    if (stateInput.className !== 'warning_field') {
        let node = document.createElement('p');
        let stateRequiredText = 'State is a required field.';  
        stateInput.className = 'warning_field';
        node.className = 'warning_text';
        node.innerText = stateRequiredText;
        stateClass.appendChild(node);
        return false;
    }
}

function invalidQuestionField() {
    if (questionInput.className !== 'warning_field') {
        let node = document.createElement('p');
        let descriptionRequiredText = 'Description is a required field.';    
        questionInput.className = 'warning_field';
        node.className = 'warning_text';
        node.innerText = descriptionRequiredText;
        questionClass.appendChild(node);
        return false;
    }
}

function californiaPurchasedItemSelect(event) {
    if (event.target.value === "California") {
        let div = document.createElement('div');
        div.className = "select_california";
        div.innerHTML = "<span>Was your item purchased in CA?:<sup>*</sup></span>";
        let selectNode = document.createElement('select');
        let options = ["Select one", "Yes", "No"];
            options.map(function(x) {
                let optionNode = document.createElement('option');
                optionNode.value = x;
                optionNode.text = x;
                selectNode.appendChild(optionNode);
            });
        div.appendChild(selectNode);
        contactForm.insertBefore(div, contactForm.childNodes[6]);
        questionInput.rows = 3;
    }
}

function removeWarning(elInput) {
    elInput.classList.remove('warning_field');
    return true;
}

// Functions to check if input is valid
function isValidFullName(name) {
    let isValid = /\w+\s\w+/.test(name);
    return isValid ? removeWarning(fullNameInput) : invalidNameField();  
}

function isValidPhoneNumber(number) {
    let isValid = /^\d{3}-\d{3}-\d{4}$/.test(number);
    return isValid ? removeWarning(mobilePhoneInput): invalidMobilePhoneField();
}

function isValidState(state) {
    return state !== "Select one" ? removeWarning(stateInput) : invalidStateField();
}

function isValidQuestion(question) {
    let isValid = /\w+/.test(question);
    return isValid ? removeWarning(questionInput) : invalidQuestionField(); 
}

function successOnValidation() {
    let thankYouText = 'Thank you! ';
    let recievedText = '<h2>We have received your message and will reach out to you as soon as humanly possible</h2>';
    container.children[0].innerHTML = thankYouText + recievedText;
    contactForm.parentNode.removeChild(contactForm);
}

function widgetValidation() {
    let a,b,c,d;

    a = isValidFullName(fullNameInput.value);
    b = isValidPhoneNumber(mobilePhoneInput.value); 
    c = isValidState(stateInput.value);
    d = isValidQuestion(questionInput.value);
    
    if ( a && b && c && d) {
        return successOnValidation();
    }
}

submitButton.addEventListener('click', widgetValidation);
stateInput.addEventListener('input', californiaPurchasedItemSelect);
exitWidget.addEventListener('click', function() { console.log('clicked'); });

