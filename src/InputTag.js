export default function InputTag({ ToQuestion, setZapGoal }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      ToQuestion();
    }
  };

  const getInputValue = (event) => {
    setZapGoal(Number(event.target.value));
  };

  return (
    <input
      onKeyPress={handleKeyPress}
      type="text"
      placeholder="Digite sua meta de zaps..."
      onChange={getInputValue}
    />
  );
}
