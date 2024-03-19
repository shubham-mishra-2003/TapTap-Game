import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-full overflow-hidden">
      <Header />
      <Board />
    </div>
  );
}

export default App;
