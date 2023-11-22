export default function signUp(evt) {
    evt.preventDefault();
    const msgError = document.getElementById('signUpAlert');
    const email = document.getElementById('login-Input').value;
    const name = document.getElementById('login-Name-Input').value;
    const password = document.getElementById('pass-SignUp-Input').value;
    const passwordConfirm = document.getElementById('confirmPass-SignUp-Input').value;

    if (name === "" || email === "" || password === "" || passwordConfirm === "") {
        msgError.innerHTML = 'Todos os campos devem ser preenchidos'
        console.log('Todos os campos devem ser preenchidos');
        return;
    }
    if (email.length < 5) {
        console.log('email com menos de 5 letras');
        msgError.innerHTML = 'Email deve conter mais de 5 caracteres'
        return;
    } else if (email.indexOf('@') === -1) {
        console.log('email invalido nao contem "@"');
        msgError.innerHTML = 'Email deve conter "@"'
        return;
    }
    //senha
    if (password.length < 5) {
        console.log('senha deve conter mais de 5 digitos');
        msgError.innerHTML = 'Senha deve conter no minimo 5 digitos'
        return;
    }
    //confirmar senha
    if (passwordConfirm !== password) {
        msgError.innerHTML = 'Senhas digitadas não coincidem'
        console.log('senhas nao coincidem')
        return;
    }
    console.log('to funcionando');
    msgError.innerHTML = 'Cadastro efetuado com sucesso!';
    let emailInputCLEAR = document.querySelector('#login-Input')
    let nameInputCLEAR = document.querySelector('#login-Name-Input')
    let senhaInputCLEAR = document.querySelector('#pass-SignUp-Input')
    let senhaConfirmInputCLEAR = document.querySelector('#confirmPass-SignUp-Input')
    nameInputCLEAR.value = ""
    emailInputCLEAR.value = ""
    senhaInputCLEAR.value = ""
    senhaConfirmInputCLEAR.value = ""
    const newUser = {
        name: name,
        emailUser: email,
        senhaUser: password,
    }
    let listaDeUsuarioCadastro = JSON.parse(localStorage.getItem("usersList"));
    listaDeUsuarioCadastro.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(listaDeUsuarioCadastro));
    console.log(newUser)
}