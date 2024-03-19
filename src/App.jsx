import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <Header />
      <Board />
    </div>
  );
}

export default App;
