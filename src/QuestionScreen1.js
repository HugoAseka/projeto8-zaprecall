import React from "react";
import Answers from "./Answers";
import Test from "./Test";


export default function QuestionScreen1() {

  function Turncard(index) {
    cardArr[index].front = 'question';
    setCardArr([...cardArr]);
  }

  function ShowAnswer(index) {
    cardArr[index].front = 'answer';
    setCardArr([...cardArr]);
  }

  function correct(index){
    cardArr[index].front = 'correct'
    setCardArr([...cardArr])
  }

  function setwrong(index){
    cardArr[index].front = 'wrong'
    setCardArr([...cardArr])
  }
  function setalmost(index){
    cardArr[index].front = 'almost'
    setCardArr([...cardArr])
  }

  function Frontface({ index }) {
    return (
      <div className="question-front">
        <span>Pergunta {index + 1}</span>
        <ion-icon
          onClick={() => Turncard(index)}
          name="play-outline"
        ></ion-icon>
      </div>
    );
  }
  function Backface({question, index}) {
    
    return (
      <div className="question-back">
        <span>{question}</span>
        <img onClick={() => ShowAnswer(index)}  src="./recursos/setinha.png" />
      </div>
    );
  }

  function ShowCorrect({ index }) {
    return (
      <div className="question-front correct">
        <span>Pergunta {index + 1}</span>
        <span className="checkmark"><ion-icon name="checkmark-circle"></ion-icon></span>
      </div>
    );
  }
  function ShowWrong({ index }) {
    return (
      <div className="question-front wrong">
        <span>Pergunta {index + 1}</span>
        <span className="close-circle"><ion-icon  name="close-circle"></ion-icon></span>
      </div>
    );
  }
  function ShowAlmost({ index }) {
    return (
      <div className="question-front almost">
        <span>Pergunta {index + 1}</span>
        <span className= "help-circle"><ion-icon  name="help-circle"></ion-icon></span>
      </div>
    );
  }


  const [cardArr, setCardArr] = React.useState([
    {
      front: 'initial',
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      front: 'initial',
      question: "O React é __",
      answer: " uma biblioteca JavaScript para construção de interfaces",
    },
    {
      front: 'initial',
      question: "Componentes devem iniciar com _",
      answer: " letra maiúscula",
    },
    {
      front: 'initial',
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      front: 'initial',
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      front: 'initial',
      question: "Usamos o npm para __",
      answer: " gerenciar os pacotes necessários e suas dependências",
    },
    {
      front: 'initial',
      question: "Usamos props para __ ",
      answer: "passar diferentes informações para componentes ",
    },
    {
      front: 'initial',
      question: "Usamos estado (state) para _",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ]);



  let [contador, setContador] = React.useState(0);
  if(contador === 0){
    cardArr.sort(comparador);
    setContador( contador = contador +1)
  }
  function comparador() { 
    return Math.random() - 0.5; 
  } 



  return (
    <div className="question-container">
      <div className="header">
        <img src="./recursos/logo-pequeno.png" />
        <span>ZapRecall</span>
      </div>

      {cardArr.map((arr, index) =><Test 
            front={arr.front}
            index= {index} 
            question = {arr.question}
            Frontface={Frontface} 
            Backface={Backface}
            Answers={Answers}
            answer = {arr.answer}
            correct = {correct}
            ShowCorrect = {ShowCorrect}
            setwrong ={setwrong}
            ShowWrong ={ShowWrong}
            setalmost={setalmost}
            ShowAlmost={ShowAlmost}
            
       />  )}

       
    </div>
  );
}
