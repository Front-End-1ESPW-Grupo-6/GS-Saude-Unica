import "./signup.scss";

function generateRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export default function signUp(evt) {
    evt.preventDefault();
    const msgError = document.getElementById('SignUpAlert');
    const emailInput = document.getElementById('login-Input').value;
    const name = document.getElementById('login-Name-Input').value;
    const passwordInput = document.getElementById('pass-SignUp-Input').value;
    const passwordConfirm = document.getElementById('confirmPass-SignUp-Input').value;

    if (name === "" || emailInput === "" || passwordInput === "" || passwordConfirm === "") {
        msgError.innerHTML = 'Todos os campos devem ser preenchidos'
        msgError.classList.add('error');
        msgError.classList.remove('success');
        console.log('Todos os campos devem ser preenchidos');
        return;
    }
    if (emailInput.length < 5) {
        console.log('email com menos de 5 letras');
        msgError.classList.add('error');
        msgError.classList.remove('success');
        msgError.innerHTML = 'Email deve conter mais de 5 caracteres'
        return;
    } else if (emailInput.indexOf('@') === -1) {
        console.log('email invalido nao contem "@"');
        msgError.classList.add('error');
        msgError.classList.remove('success');
        msgError.innerHTML = 'Email deve conter "@"'
        return;
    }
    //senha
    if (passwordInput.length < 5) {
        console.log('senha deve conter mais de 5 digitos');
        msgError.classList.add('error');
        msgError.classList.remove('success');
        msgError.innerHTML = 'Senha deve conter no minimo 5 digitos'
        return;
    }
    //confirmar senha
    if (passwordConfirm !== passwordInput) {
        msgError.classList.add('error');
        msgError.classList.remove('success');
        msgError.innerHTML = 'Senhas digitadas não coincidem'
        console.log('senhas nao coincidem')
        return;
    }
    const newUser = {
        id: generateRandomId(),
        name: name,
        email: emailInput,
        password: passwordInput,
    }
    fetch("https://gs-saude-default-rtdb.firebaseio.com/users/contas.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Cadastro efetuado com sucesso!', data);
            msgError.innerHTML = 'Cadastro efetuado com sucesso!';
            msgError.classList.add('success');
            msgError.classList.remove('error');
            let emailInputCLEAR = document.querySelector('#login-Input')
            let nameInputCLEAR = document.querySelector('#login-Name-Input')
            let senhaInputCLEAR = document.querySelector('#pass-SignUp-Input')
            let senhaConfirmInputCLEAR = document.querySelector('#confirmPass-SignUp-Input')
            nameInputCLEAR.value = ""
            emailInputCLEAR.value = ""
            senhaInputCLEAR.value = ""
            senhaConfirmInputCLEAR.value = ""
        })
        .catch(error => {
            console.error('Erro ao efetuar cadastro:', error);
            msgError.classList.add('error');
            msgError.classList.remove('success');
            msgError.innerHTML = 'Erro ao efetuar cadastro. Tente novamente mais tarde';
        });
}