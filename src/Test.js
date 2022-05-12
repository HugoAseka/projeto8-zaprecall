export default function Test({
    front,
    index,
    question,
    Frontface,
    Backface,
    Answers,
    answer
}){
    if(front === 'initial'){
        return(
            <Frontface cardstate={front} index={index} />
        )
    }else if( front === 'question'){ return( 
        <Backface question={question} index={index} />
    )}
       else if( front === 'answer'){
           return <Answers index={index} answer={answer}/>
       }
}