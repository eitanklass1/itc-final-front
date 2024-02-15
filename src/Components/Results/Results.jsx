import { useGameContext } from "../../Context/GameContext";
import "./Results.css";

const Results = () => {
  const { gameResults } = useGameContext();
 if(!gameResults){
  return null
 }
  return  (
    <div style={{ color: "white", margin: "20px", width: "100%" }}>
      {gameResults.length > 0 ? (
        <>
          <h2>Results</h2>
          <ul className="result-list" >
            {gameResults.map((result, index) => (
              <li key={index}>{`Winner: ${result.winner}`}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No results yet.</p> // Changed from <li> to <p> for semantic correctness outside a list
      )}
    </div>
  );
};

export default Results;
