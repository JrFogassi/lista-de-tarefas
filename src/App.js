import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [tarefas, setarTarefas] = useState([
   /*
    {
      id:0,
      tarefa:'Ler um livro',
      finalizada:false
    },
    {
      id:0,
      tarefa:'Malhar',
      finalizada:true
    },
    */


  ]);
  const [modal, setModal] = useState(false);

  const salvarTarefa = () => {
    //TODO: Salvar a tarefa.
    var tarefa = document.getElementById("content-tarefa");
    
    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada: false
      }
    ]);

    setModal(false);

  }

  const marcarConcluida = (id) => {
        let novasTarefas = tarefas.filter (function(val){
           if(val.id == id){
              val.finalizada = true;
           }
            return val;
        })

        setarTarefas(novasTarefas);
  }

  const abrirModal = () => {
        setModal(!modal);
  }

useEffect(()=>{
  //Fazer uma chamada para API e preencher o estado tarefas.
},[])

  return (
    <div className="App">
      {
        modal?
        <div className="modal">
              <div className="modalContent">
                <h3>Adicionar sua tarefa</h3>
                <input id="content-tarefa" type="text"></input>
                <button onClick={()=>salvarTarefa()}>Salvar</button>
              </div>
          </div>
          :
          <div></div>
      }
        <div onClick={()=>abrirModal()} className="addTarefa"></div>
        <div className="boxTarefas">
          <h2>Lista de Tarefas do Dia</h2>
          {
            tarefas.map((val)=>{
              if(!val.finalizada){
                return (
                  <p onClick={()=>marcarConcluida(val.id)}>{val.tarefa}</p>
                );
              } else{
                return (
                  <p onClick={()=>marcarConcluida(val.id)} style={{textDecoration:'line-through'}}>{val.tarefa}</p>
                )
              }
            })
          }
        </div>
    </div>
  );
}

export default App;
