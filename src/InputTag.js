

export default function InputTag({getInputValue,ToQuestion}){

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          ToQuestion();
        }
      }
    
    return (
        <input onKeyPress={handleKeyPress} type="text" placeholder="Digite sua meta de zaps..." onChange={getInputValue} />
    );
}