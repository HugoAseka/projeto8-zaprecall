import react from "react";

function Footeremoji({ numQuestions, notZap, zapGoal }) {
  const [emoji, setEmoji] = react.useState("./recursos/party.png");
  const [lasttext, setLasttext] = react.useState(
    "Você não esqueceu de nenhum flashcard!"
  );
  let Zap = 8 - notZap;
  if (numQuestions === 8 && Zap >= zapGoal) {
    return (
      <>
        <div className="footer-emoji">
          <img src={emoji} />
          <span>Parabéns!</span>
        </div>
        <div> {lasttext}</div>
      </>
    );
  } else if (numQuestions === 8 && Zap < zapGoal) {
    return (
      <>
        <div className="footer-emoji">
          <img src="./recursos/sad.png" />
          <span>Putz...</span>
        </div>
        <div> Ainda faltam alguns... Mas não desanime!</div>
      </>
    );
  } else return "";
}

function ReloadZap({ numQuestions }) {
  if (numQuestions === 8)
    return (
      <div onClick={() => window.location.reload()} className="reload-zap">
        REINICIAR RECALL
      </div>
    );
  else return "";
}

export default function Footer({ arrEmojis, numQuestions, notZap, zapGoal }) {
  return (
    <footer>
      <Footeremoji numQuestions={numQuestions} notZap={notZap} zapGoal={zapGoal} />

      <div>
        
        {numQuestions}/8 CONCLÚIDOS 
      </div>
      <div className="check-icons">
        {arrEmojis.map((arr) => (
          <span className={arr}>
            <ion-icon name={arr}></ion-icon>
          </span>
        ))}
      </div>

      <ReloadZap numQuestions={numQuestions} />
    </footer>
  );
}
