import logo from './logo.svg';
import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div>
        {/*<Simpsons/>*/}
        <Characters/>

    </div>
  )
}

export default App;

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів