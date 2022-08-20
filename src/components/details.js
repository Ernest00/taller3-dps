import React from 'react';
export default class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"Bryan Ernesto Marroquín Anaya",
            carrera: "Ingeniería en Ciencias de la Computación"
        }
    }

    render(){
      return(
        <>
        <div>
        <h2 className="App-hello">Hey! 👋</h2>
        <p>Mi nombre es {this.state.nombre}, estudio la carrera de {this.state.carrera}. </p>

        <div className="text-justify">
            
            <h3>Skills:</h3>
            <ul class="list">
                <li class="btn">HTML</li>
                <li class="btn">CSS</li>
                <li class="btn">JavaScript</li>
                <li class="btn">Java</li>
                <li class="btn">C#</li>
                <li class="btn">Asp.net</li>
                <li class="btn">Laravel</li>
                <li class="btn">SASS</li>
                <li class="btn">Tailwind CSS</li>
                <li class="btn">Material UI</li>
                <li class="btn">Git</li>
                </ul>
            </div>

        </div>
        
        </>
      )
    }
  }