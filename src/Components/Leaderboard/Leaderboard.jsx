import { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [userScores, setUserScores] = useState([]);
  const [currentUserScores, setCurrentUserScores] = useState([])
  const [showUserScores, setShowUserScores] = useState(false); 
  const toggleUserScores = () => {
    setShowUserScores(!showUserScores);
    getUserScores()
  };
  const getUserScores=()=>{
    axios.get("https://www.itc-final-api.vercel.app/scores/user-scores", {
        withCredentials: true,
      })
      .then((response) => {
        const sortedScores = response.data.userScores.sort(
          (a, b) => b.score - a.score
        );
        const formattedScores = sortedScores.map((userScore) => {
          const date = new Date(userScore.date);
          const formattedDate = `${date.getDate()}-${date.toLocaleString(
            "default",
            { month: "short" }
          )}-${date.getFullYear()}`;
          return { ...userScore, date: formattedDate };
        });
        setCurrentUserScores(formattedScores);
      })
      .catch((error) => {
        console.error(error);
      });}


  const getAllUsersHighestScores=()=>{
    axios.get("https://itc-final-api.vercel.app/scores/allusers", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response)
        const sortedScores = response.data.scores.sort((a, b) => b.score - a.score);
        const topThreeScores = sortedScores.slice(0, 3);
        const formattedScores = topThreeScores.map((userScore) => {
          const date = new Date(userScore.date);
          const formattedDate = `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()}`;
          return { ...userScore, date: formattedDate };
        });
        setUserScores(formattedScores);
      })
      .catch((error) => {
        console.error(error);
      });}

  useEffect(() => {
getAllUsersHighestScores()
  }, []);

  return (
    <div className="main">
      <div className="leaderboard-container">
        <p className="leaderboard-heading">Top Three Records</p>
        <div className="leaderboard">
          <div className="user-score-row header-row">
            <div className="user-score-item">#</div>
            <div className="user-score-item">Nickname</div>
            <div className="user-score-item">Score</div>
            <div className="user-score-item">Date</div>
          </div>
          {userScores &&
            userScores.map((userScore, index) => (
              <div key={index} className="user-score-row">
                <div className="user-score-item">{index + 1}</div>
                <div className="user-score-item">{userScore.nickname}</div>
                <div className="user-score-item">{userScore.score}</div>
                <div className="user-score-item">{userScore.date}</div>
              </div>
            ))}
        </div>
      </div>

      <div className="leaderboard-container2">
        <button className="leaderBoardBtn" onClick={toggleUserScores}>
          {showUserScores ? "Hide My Record History" : "Show My Record History"}
        </button>
        {showUserScores && (
          <div className="leaderboard">
            <div className="user-score-row header-row">
              <div className="user-score-item">#</div>
              <div className="user-score-item">Nickname</div>
              <div className="user-score-item">Score</div>
              <div className="user-score-item">Date</div>
            </div>
            {currentUserScores &&
              currentUserScores.map((userScore, index) => (
                <div key={index} className="user-score-row">
                  <div className="user-score-item">{index + 1}</div>
                  <div className="user-score-item">{userScore.nickname}</div>
                  <div className="user-score-item">{userScore.score}</div>
                  <div className="user-score-item">{userScore.date}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
