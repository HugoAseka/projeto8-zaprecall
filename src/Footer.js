import react from "react"

function Footeremoji(){

    const [emoji, setEmoji] = react.useState("./recursos/party.png")
    const [lasttext, setLasttext] = react.useState("Você não esqueceu de nenhum flashcard!")

    return(
        <>
            <div className="footer-emoji">
                <img  src={emoji}/>
                <span>Parabéns!</span>
            </div>
            <div> {lasttext}</div>
        </>
    )
}


export default function Footer(){

    
    



    return(
        <footer>
            <Footeremoji />
            
            <div> 0/7 CONCLÚIDOS</div>
            <div className="check-icons">
                <span className="checkmark"><ion-icon name="checkmark-circle"></ion-icon></span>
                <span className= "help-circle"><ion-icon  name="help-circle"></ion-icon></span>
                <span className="close-circle"><ion-icon  name="close-circle"></ion-icon></span>
            </div>
        </footer>
    )
}