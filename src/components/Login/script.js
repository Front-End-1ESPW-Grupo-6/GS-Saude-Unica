export default function Auth(evt) {
    evt.preventDefault();
    const msgError = document.getElementById('loginAlert');
    let listaDeUsuario = JSON.parse(localStorage.getItem("usersList"));
    const email = document.getElementById('loginBaseInput').value;
    const password = document.getElementById('pass-Login-Input').value;
    if (email === "" || password === "") {
        msgError.innerHTML = 'Preencha todos os campos'
    } else {
        const acharUsuario = listaDeUsuario.find(usuario => {
            return usuario.emailUser === email && usuario.senhaUser === password;
        });
        if (acharUsuario) {
            localStorage.setItem("userLog", "1");
            let logUser = [acharUsuario];
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
}
