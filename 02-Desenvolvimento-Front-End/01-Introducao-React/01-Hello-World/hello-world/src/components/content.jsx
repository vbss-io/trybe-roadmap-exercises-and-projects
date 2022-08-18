import React, { Component } from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'aprendendo'
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status:'aprederei'
    },
]

class Content extends Component {
     render() {
         return (
             <section className='content'>
             {conteudos.map((element) => (
             <div key={element.conteudo} className='cont'>    
             <p><strong>O conteúdo é: {element.conteudo}</strong></p>
             <p>Status: {element.status}</p>
             <p>Blobo: {element.bloco}</p>
             </div>
             ))}
             </section>
         )
     }   
}

export default Content;