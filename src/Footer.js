
function Footeremoji(){
    return(
        <>
            <div className="footer-emoji">
                <img src="./recursos/party.png"/>
                <span>Parabéns!</span>
            </div>
            <div> Você não esqueceu de nenhum flashcard!</div>
        </>
    )
}


export default function Footer(){






    return(
        <footer>
            <Footeremoji/>
            
            <div> 0/7 CONCLÚIDOS</div>
            <div className="check-icons">
                <span className="checkmark"><ion-icon name="checkmark-circle"></ion-icon></span>
                <span className= "help-circle"><ion-icon  name="help-circle"></ion-icon></span>
                <span className="close-circle"><ion-icon  name="close-circle"></ion-icon></span>
            </div>
        </footer>
    )
}