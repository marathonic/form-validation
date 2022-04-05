class User {
    constructor(email,country,zip,pw,pwConfirm) {
        this.email = email,
        this.country = country,
        this.zip = zip,
        this.pw = pw,
        this.pwConfirm = pwConfirm
    }

    
}

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const pw = document.querySelector('#pw');
const pwConfirm = document.querySelector('#pw-confirm');
const submitBtn = document.querySelector('[data-button-submit]') 
let userArray = [];

email.placeholder = 'e.g: example@email.com';
pw.placeholder = '6 to 20 chars, alphanumeric'


submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(email.value == '' || testEmail() === false){
        email.classList.add('bounce-invalid');
        return false;
    }
    if(pw.value == '' || pw.value.length < 6){
        pw.classList.add('bounce-invalid');
        return false;
    } 

    if(pwConfirm.value !== pw.value){
        pwConfirm.validity.typeMismatch = true;
        pwConfirm.setCustomValidity('passwords must match');
        pwConfirm.reportValidity();
        pwConfirm.addEventListener('input', function(){
            if(pwConfirm.value == pw.value){
                pwConfirm.validity.typeMismatch = false;
                return;
            }
        })
        return false;
    }

    userArray.push(new User(email.value, country.value, zip.value, pw.value, pwConfirm.value));
    console.table(userArray);
    return new User(email.value, country.value, zip.value, pw.value, pwConfirm.value);
})

email.addEventListener('input', function(e){
    testEmail();
});

function testEmail(){
    if(email.validity.typeMismatch) {
        email.setCustomValidity('Please provide a valid email address');
        email.reportValidity();
        return false;
    }   else    {
        email.setCustomValidity('');
        return true;
    }
}

email.addEventListener('focus', function(){
    if(email.classList.contains('bounce-invalid')) email.classList.remove('bounce-invalid');
    
})

function validatePw(pass) {
    let reggae = /^[a-zA-Z0-9_]+$/g;
    return reggae.test(pass)
}

pw.addEventListener('input', function(){
    if(pw.classList.contains('bounce-invalid')) pw.classList.remove('bounce-invalid');
    if(!validatePw(pw.value) || pw.value.length < 6 || pw.value.length > 19) {
        pw.validity.typeMismatch = true;
        pw.setCustomValidity('6 to 20 chars, alphanumeric');
        pw.reportValidity();
    }   else    {
        pw.setCustomValidity('');
    }
})

pwConfirm.addEventListener('input', function(){
    if(pwConfirm.value !== pw.value){
        pwConfirm.validity.typeMismatch = true;
        pwConfirm.setCustomValidity('passwords must match');
        pwConfirm.reportValidity();
        pwConfirm.addEventListener('input', function(){
            if(pwConfirm.value == pw.value){
                pwConfirm.validity.typeMismatch = false;
                return;
            }
        })

    }   else    {
        pwConfirm.setCustomValidity('');
    }
})

function onlySpaces(str) {
    return str.trim().length === 0;
}

console.table(userArray);