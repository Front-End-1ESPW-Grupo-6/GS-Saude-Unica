import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Error from './components/Error';
import Login from './components/Login';
import Solucao from './components/Test';
import SignUp from './components/SignUp';
import Contato from './components/Contato';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Test from './components/Test';

function App() {
  var listaUser = JSON.parse(localStorage.getItem("usersList"))
  if (listaUser == null) {
    console.log('Lista de usuarios nao encontrada')
    console.log('Criando lista de usuarios')
    const user1 = {  //Conta admin
      name: "GaloAdmin",
      emailUser: "contatogalofiap@gmail.com",
      senhaUser: "12345"
    }
    let userList = []
    userList.push(user1)
    localStorage.setItem("usersList", JSON.stringify(userList))
    console.log(listaUser)
  } else {
    console.log('lista de usuarios encontrada')
    console.log(listaUser)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/Soluçao' element={<Solucao />} />
        <Route path='/Sign-in' element={<Login />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/TestProject' element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
