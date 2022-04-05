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
const pw = document.querySelector('#pw');
const pwConfirm = document.querySelector('#pw-confirm');
const submitBtn = document.querySelector('[data-button-submit]') 

submitBtn.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
})

email.addEventListener('input', function(e){
    if(email.validity.typeMismatch) {
        email.setCustomValidity('YOU FOOL ! I asked for an email');
        email.reportValidity();
    }   else    {
        email.setCustomValidity('');
    }
});

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

pwConfirm.addEventListener('input', function(){
    if(pwConfirm.value !== pw.value){
        pwConfirm.validity.typeMismatch = true;
        pwConfirm.setCustomValidity('passwords must match');
        pwConfirm.reportValidity();
    }   else    {
        pwConfirm.setCustomValidity('');
    }
})