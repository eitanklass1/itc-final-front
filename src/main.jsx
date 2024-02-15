import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GameContextProvider } from "./Context/GameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
