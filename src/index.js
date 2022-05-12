import reactDom from "react-dom";
import React from "react";
import Wellcome from "./Wellcome";
import Answers from "./Answers";
import QuestionScreen1 from "./QuestionScreen1";
import Test from "./Test";

export default function App(){

    
    const [firstternary, setFirstternary] = React.useState('screen1')

    function ToQuestion(firstternary){
        setFirstternary(firstternary = 'screen2');
    }

    return(
        <>
          { firstternary === 'screen1' ? <Wellcome firstternary={firstternary} ToQuestion={ToQuestion}/> : <QuestionScreen1/>}  
        </>
    )
}

reactDom.render(<App />, document.querySelector(".root"));