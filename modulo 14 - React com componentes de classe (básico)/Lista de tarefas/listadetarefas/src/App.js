import React from 'react';
import './App.css';
import Main from './components/Main';

export default function App() {
  //Para retornar mais de um elemento jsx dentro do return, precisamos colocar os elementos dentro de um fragment <>, dessa forma:
  //Stateless são componentes que não possuem estado, são funções normais

  return <Main />
}