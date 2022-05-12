import React from "react";
import Answers from "./Answers";
import Test from "./Test";


export default function QuestionScreen1() {

  function Turncard(index) {
    cardArr[index].front = 'question';
    setCardArr([...cardArr]);
  }

  function ShowAnswer(index) {
      console.log(cardArr)
      console.log(index)
      console.log(cardArr[index])
    cardArr[index].front = 'answer';
    setCardArr([...cardArr]);
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
       />  )}


      {/* {cardArr.map((arr, index) =>
        arr.front ? (
          <Frontface cardstate={arr.front} index={index} />
        ) : (
          <Backface question={arr.question} />
        )
      )} */}
      {/* {cardArr.map((arr,index) => <Answers answer={arr.answer}/>)} */}
    </div>
  );
}
