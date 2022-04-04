class User {
    constructor(email,country,zip,pw,pwConfirm) {
        this.email = email,
        this.country = country,
        this.zip = zip,
        this.pw = pw,
        this.pwConfirm = pwConfirm
    }

    
}

let users = [];

const submitBtn = document.querySelector('[data-button-submit]');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); 

    // I THINK THOSE ARE TWO DIFFERENT CLASSES:
    // Each time we get the <result of> collectUserInfo(), 
    //we're actually getting a brand new User class object,
    //because collectUserInfo RETURNS a NEW USER, so it's a new one each time. 
    pushToArray(collectUserInfo());
    validate(collectUserInfo());
})

function validate(user) {
    console.log('we received a new User object, their email on next line')
    console.log(user.email)
    
}



function collectUserInfo() {
    const userForm = document.querySelector('[data-user-form]');
    
        const userMail = document.getElementById('email');
        const userCountry = document.querySelector('#country');
        const userZip = document.querySelector('#zip');
        const userPw = document.querySelector('#pw');
        const userPwConfirm = document.querySelector('#pw-confirm');

    // userMail.required = true;
    // userCountry.required = true;
    // userZip.required = true;
    // userPw.required = true;
    // userPwConfirm.required = true;


        
        
        //Paste validation function here?
        // Validation needs to happen at this stage 
        // if(userMail.value === '') return;

        // should we return an object? 

        return new User(userMail.value, userCountry.value, userZip.value, userPw.value, userPwConfirm.value);


        return {}
        users.push(new User(userMail.value,userCountry, userZip, userPw, userPwConfirm)) 

        console.table(users);

    }

function pushToArray(newUser){
  users.push(newUser);  
  console.table(users);
} 


let userPwConfirm = document.querySelector('#pw-confirm');
userPwConfirm.addEventListener('input', function(){

    let userPw = document.querySelector('#pw');
    if(userPw.value !== userPwConfirm.value) {
        userPwConfirm.setCustomValidity('passwords do not match')
        return false;
    }
    
})

document.querySelector('#pw').addEventListener('input', validatePassword)

function validatePassword(pw){
    pw = document.querySelector('#pw');
    let regg = /^[a-zA-Z0-9_]+$/;
    return regg.test(pw.value);
}

