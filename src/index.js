import reactDom from "react-dom";
import React from "react";
import Wellcome from "./Wellcome";
import QuestionScreen1 from "./QuestionScreen1";
import "./style.css";
import Footer from "./Footer";

function App() {
  let [firstternary, setFirstternary] = React.useState("screen1");

  function ToQuestion() {
    
    if( isNaN(zapGoal) ){
      alert("Meta precisa ser um número!");
      return;
    }else if( zapGoal < 1 || zapGoal > 8){
      alert("Meta precisa ser entre 1 e 8 flashcards!");
      return;
    }
    setFirstternary((firstternary = "screen2"));
  }

  const [arrEmojis, setArrEmojis] = React.useState([]);
  function updateEmojis(parameter) {
    setArrEmojis([...arrEmojis, parameter]);
  }

  let [numQuestions, setNumQuestions] = React.useState(0);
  let [notZap, setNotZap] = React.useState(0);

  function updateNumQuestions(p) {
    setNumQuestions((numQuestions = numQuestions + 1));
    if (p !== "correct") setNotZap((notZap = notZap + 1));
  }

  let [zapGoal, SetZapGoal] = React.useState(0);

  const getInputValue = (event) => {
    SetZapGoal(Number(event.target.value));
    
  };

  return (
    <>
      {firstternary === "screen1" ? (
        <Wellcome
          firstternary={firstternary}
          ToQuestion={ToQuestion}
          getInputValue={getInputValue}
        />
      ) : (
        <QuestionScreen1
          updateEmojis={updateEmojis}
          updateNumQuestions={updateNumQuestions}
        />
      )}
      {firstternary !== "screen1" ? (
        <Footer
          arrEmojis={arrEmojis}
          numQuestions={numQuestions}
          notZap={notZap}
          zapGoal={zapGoal}
        />
      ) : (
        ""
      )}
    </>
  );
}

reactDom.render(<App />, document.querySelector(".root"));
