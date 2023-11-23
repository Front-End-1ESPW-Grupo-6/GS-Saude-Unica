export default function Auth(evt) {
    evt.preventDefault();
    fetch("https://gs-saude-default-rtdb.firebaseio.com/.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const users = data.users;
            const contasObject = users.contas;
            const contasArray = Object.values(contasObject);
            // const contasArray = users ? users.contas : [];
            console.log("Array de contas:", contasArray);

            const msgError = document.getElementById('loginAlert');
            const emailInput = document.getElementById('loginBaseInput').value;
            const passwordInput = document.getElementById('pass-Login-Input').value;

            if (emailInput === "" || passwordInput === "") {
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
                    msgError.innerHTML = 'Usuario Validado!'
                    console.log("Usuario Validado!")
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 2000);
                } else {
                    msgError.innerHTML = 'Usuario Invalido digite novamente'
                    console.log("Usuario Invalido digite novamente")
                    return;
                }
            }
        })
        .catch((error) => {
            console.error("Erro na solicitação da API:", error);
        });
}