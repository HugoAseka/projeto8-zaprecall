export default function Answers({answer}){
    return(
        <div className="question-back">
            <span>{answer}</span>
            <div className="answers">
                <div>Não lembrei</div>
                <div>Quase não lembrei</div>
                <div>Zap!</div>
            </div>
        </div>
    );
}