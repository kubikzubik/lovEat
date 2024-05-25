import povar from './povar.png';

function Contact () {
    return(
        <div>
            <h1>Contact us!</h1>
            <img src={povar} alt=""/>
            <h5> If you want to create your own recipe for a dish, call us</h5>
            <h5>phone: 8(800)535-95-95</h5>
            <h5>Telegram: @zubrikaff</h5>
            
        </div>
    );
}

export { Contact }