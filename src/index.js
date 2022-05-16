import reactDom from "react-dom";
import React from "react";
import Wellcome from "./Wellcome";
import QuestionScreen from "./QuestionScreen";
import "./style.css";
import Footer from "./Footer";

function App() {
  let [firstternary, setFirstternary] = React.useState("screen1");
  const [arrEmojis, setArrEmojis] = React.useState([]);
  let [numQuestions, setNumQuestions] = React.useState(0);
  let [notZap, setNotZap] = React.useState(0);
  let [zapGoal, setZapGoal] = React.useState(0);

  

  return (
    <>
      {firstternary === "screen1" ? (
        <Wellcome
          setFirstternary={setFirstternary}
          zapGoal={zapGoal}
          setZapGoal={setZapGoal}
        />
      ) : (
        <QuestionScreen
          setArrEmojis={setArrEmojis}
          arrEmojis={arrEmojis}
          setNotZap={setNotZap}
          notZap={notZap}
          numQuestions={numQuestions}
          setNumQuestions={setNumQuestions}
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
