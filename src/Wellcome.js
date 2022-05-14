export default function Wellcome({ firstternary, ToQuestion }) {
  return (
    <div className="wellcome-container">
      <img src="./recursos/logo.png" />
      <p>ZapRecall</p>
      <button
        onClick={() => {
          ToQuestion(firstternary);
        }}
      >
        Iniciar Recall
      </button>
    </div>
  );
}
