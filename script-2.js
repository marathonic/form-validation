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
    if(email.value == ''){
        email.classList.add('bounce-invalid');
        return false;
    }
    if(pw.value = '') return false;

    userArray.push(new User(email.value, country.value, zip.value, pw.value));
    return new User(email.value, country.value, zip.value, pw.value);
})

email.addEventListener('blur', function(e){
    if(email.validity.typeMismatch) {
        email.setCustomValidity('YOU FOOL ! I asked for an email');
        email.reportValidity();
    }   else    {
        email.setCustomValidity('');
    }
});

email.addEventListener('focus', function(){
    if(email.classList.contains('bounce-invalid')) email.classList.remove('bounce-invalid');
    
})

function validatePw(pass) {
    let reggae = /^[a-zA-Z0-9_]+$/g;
    return reggae.test(pass)
}

pw.addEventListener('input', function(){
    
    if(!validatePw(pw.value) || pw.value.length < 6) {
        pw.validity.typeMismatch = true;
        pw.setCustomValidity('6 to 20 chars, alphanumeric');
        pw.reportValidity();
    }   else    {
        pw.setCustomValidity('');
    }
})

pwConfirm.addEventListener('blur', function(){
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