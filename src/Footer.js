function Footeremoji({ numQuestions, notZap, zapGoal }) {
  let Zap = 8 - notZap;
  if (numQuestions === 8 && Zap >= zapGoal) {
    return (
      <>
        <div className="footer-emoji">
          <img src="./recursos/party.png" alt="Emoji de Parabéns!!" />
          <span>Parabéns!</span>
        </div>
        <div> "Você não esqueceu de nenhum flashcard!"</div>
      </>
    );
  } else if (numQuestions === 8 && Zap < zapGoal) {
    return (
      <>
        <div className="footer-emoji">
          <img src="./recursos/sad.png" alt="Emoji Triste" />
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
      <Footeremoji
        numQuestions={numQuestions}
        notZap={notZap}
        zapGoal={zapGoal}
      />

      <div>{numQuestions}/8 CONCLÚIDOS</div>
      <div className="check-icons">
        {arrEmojis.map((arr, index) => (
          <span key={index} className={arr}>
            <ion-icon name={arr}></ion-icon>
          </span>
        ))}
      </div>

      <ReloadZap numQuestions={numQuestions} />
    </footer>
  );
}
