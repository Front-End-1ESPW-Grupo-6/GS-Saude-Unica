import "./login.scss";

export default function Auth(evt) {
    evt.preventDefault();
    const msgError = document.getElementById('loginAlert');
    fetch("https://gs-saude-default-rtdb.firebaseio.com/.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const users = data.users;
            const contasObject = users.contas;
            const contasArray = Object.values(contasObject);
            console.log("Array de contas:", contasArray);

            const emailInput = document.getElementById('loginBaseInput').value;
            const passwordInput = document.getElementById('pass-Login-Input').value;

            if (emailInput === "" || passwordInput === "") {
                msgError.classList.add('error');
                msgError.classList.remove('success');
                msgError.innerHTML = 'Preencha todos os campos'
            } else {
                console.log("Email digitado:", emailInput);
                console.log("Senha digitada:", passwordInput);
                const usuario = contasArray.find(user => user.email === emailInput && user.password === passwordInput);
                if (usuario) {
                    console.log("Usuario encontrado:", usuario);
                    localStorage.setItem("userLog", "1");
                    let logUser = [usuario];
                    localStorage.setItem("logedUser", JSON.stringify(logUser))
                    msgError.classList.add('success');
                    msgError.classList.remove('error');
                    msgError.innerHTML = 'Usuario Validado! Redirecionando...'
                    console.log("Usuario Validado! Redirecionando...")
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 2000);
                } else {
                    msgError.classList.add('error');
                    msgError.classList.remove('success');
                    msgError.innerHTML = 'Usuario Invalido digite novamente'
                    console.log("Usuario Invalido digite novamente")
                    return;
                }
            }
        })
        .catch((error) => {
            msgError.classList.add('error');
            msgError.classList.remove('success');
            console.error("Erro na solicitação da API:", error);
        });
}