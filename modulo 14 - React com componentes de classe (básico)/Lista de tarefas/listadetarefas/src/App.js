import React from 'react';
import './App.css';
import Main1 from './components/Main1';

//Esse tipo de função são componentes que não possuem estado e os que possuem estado, são escritos como Classe
export default function App() {

  //Quando eu quero retornar mais de um elemento HTML, eu preciso colocar entre parênteses e usar um elemento pai que consiga acoplar todos os outros, ex: DIV ou fragment<>
  return (
    <Main1 />
     
  )
}
