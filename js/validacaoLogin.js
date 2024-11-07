
function validateFields(){
    const email = document.getElementById("email").value;
    const emailValid = isEmailValid();

    document.getElementById('recover-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid()
    document.getElementById('loginButton').disabled = !emailValid || !passwordValid


    }

    function isEmailValid(){
        const email = document.getElementById("email").value;
        if(!email){
            return false;
        }
        return validateEmail(email);
    }

    function isPasswordValid(){
        const password = document.getElementById('senha').value
        if(!password){
            return false;
        }
        return true

    }

    function validateEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }
    
