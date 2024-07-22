import pokeballs from '../assets/pokeballs.svg';



export default function Logo(){
    return(
        <div className="logo">
            <img src= {pokeballs} alt="Pokeball"></img>
            <h1>MemoMon</h1>
        </div>
    );
}