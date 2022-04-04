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
    validateInputs();
    // collectUserInfo();
    // newCollectUserInfo(validateInputs()); <--- takes the returned object
})

// function newCollectUserInfo(inputs){
//     inputs = 
// }

function collectUserInfo() {
    const userForm = document.querySelector('[data-user-form]');
    
        const userMail = document.getElementById('email');
        const userCountry = document.querySelector('#country').value;
        const userZip = document.querySelector('#zip').value;
        const userPw = document.querySelector('#pw').value;
        const userPwConfirm = document.querySelector('#pw-confirm').value;
        
        //Paste validation function here?
        // Validation needs to happen at this stage 
        if(userMail.value === '') return;

        users.push(new User(userMail.value,userCountry, userZip, userPw, userPwConfirm)) 

        console.table(users);

    }

function validateInputs() {
    const inputs = document.querySelectorAll('.my-inputs');
    inputs.forEach(input => {
        // input.setAttribute('required', true);
        
        input.addEventListener('input', function(e){
            if(input.validity.typeMismatch){
                if(input.type === 'email') input.setCustomValidity('Expecting an email address');
                if(input.type === 'country') input.setCustomValidity('Expecting a country');
                if(input.type === 'number') input.setCustomValidity('Expecting a ZIP code');
                if(input.type === 'password') {
                    input.minLength = 8;
                    input.setCustomValidity('8 to 20 digits');
                }                 
                input.setCustomValidity('');
                input.reportValidity();
            }   else    {
                input.setCustomValidity('');
            }
        });

    }); 
}



    // const getEmail = () => {
    //     let userData = new FormData(userForm);
    //     let email = userData.get('email');
    //     console.log(email);
    //     return email;
    // }

    // const button = document.querySelector('[data-button-submit]');
    // button.addEventListener('click', function() {
    //     getEmail();
    // })


