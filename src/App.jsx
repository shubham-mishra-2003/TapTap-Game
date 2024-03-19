import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <Header />
      <Board />
      <Score />
    </div>
  );
}

export default App;
