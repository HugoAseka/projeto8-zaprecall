

export default function InputTag({getInputValue}){


    return (
        <input type="text" placeholder="Digite sua meta de zaps..." onChange={getInputValue} />
    );
}