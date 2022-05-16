import InputTag from "./InputTag";

export default function Wellcome({
  setFirstternary,
  zapGoal,
  getInputValue,
  setZapGoal,
}) {
  function ToQuestion() {
    if (isNaN(zapGoal)) {
      console.log(zapGoal);
      alert("Meta precisa ser um número!");
      return;
    } else if (zapGoal < 1 || zapGoal > 8) {
      alert("Meta precisa ser entre 1 e 8 flashcards!");
      return;
    }
    setFirstternary("screen2");
  }

  return (
    <div className="wellcome-container">
      <div className="logo-container">
        <img src="./recursos/logo.png" alt="logo" />
        <p>ZapRecall</p>
      </div>
      <InputTag ToQuestion={ToQuestion} setZapGoal={setZapGoal} />
      <button
        onClick={() => {
          ToQuestion();
        }}
      >
        Iniciar Recall
      </button>
    </div>
  );
}
