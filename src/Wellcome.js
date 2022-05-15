import InputTag from "./InputTag";

export default function Wellcome({ToQuestion, getInputValue }) {
  return (
    <div className="wellcome-container">
      <img src="./recursos/logo.png" />
      <p>ZapRecall</p>
      <InputTag getInputValue={getInputValue} />
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
