import React from 'react';
import './App.css';
import HelloWord from './components/hello-world';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

const Task = (value) => {
  return (
    <p>{value}</p>
  )
}

const tasks = ['React', 'Estudar React', 'Estudar React^2', 'Mais React'];

function App() {
  return (
    <section className='main'>
      <Header />
      <Content />
      <HelloWord />
      <h3>Tarefas</h3>
      {tasks.map(task => Task(task))}
      <Footer />
    </section>
  );
}

export default App;
