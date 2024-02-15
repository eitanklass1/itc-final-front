import "./Scores.css";
import { useGameContext } from "../../Context/GameContext";
const Scores = () => {
  const { playerScore, playerTwoScore, tieScore } = useGameContext();

  return (
    <div className="scores">
      <p className="player">
        <span className="p1">PLAYER</span>
        <span className="score-player">{playerScore}</span>
      </p>
      <p className="Tie">
        <span className="tie-p1">TIE</span>
        <span className="score-tie">{tieScore}</span>
      </p>
      <p className="computer">
        <span className="p2">Player 2</span>
        <span className="score-computer">{playerTwoScore}</span>
      </p>
    </div>
  );
};

export default Scores;
