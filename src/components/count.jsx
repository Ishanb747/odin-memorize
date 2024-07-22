export default function Count({ score, bestScore }){
    return(
        <div className="scoredisplay">
            <span>Score: {score} |</span>
            <span>Best score: {bestScore}</span>
        </div>
    );
};