import { useState, useEffect } from "react";
import PreviousScore from "./PreviousScore";

const Board = () => {
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("Start");
  const [intervalId, setIntervalId] = useState(null); // State to hold interval id

  useEffect(() => {
    updateScore();
  }, [score]);

  const createCircle = () => {
    const gameContainer = document.getElementById("game-container");
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left =
      Math.random() * (gameContainer.offsetWidth - 50) + "px";
    circle.style.top =
      Math.random() * (gameContainer.offsetHeight - 50) + "px";

    gameContainer.appendChild(circle);

    circle.addEventListener("click", () => {
      setScore((prevScore) => prevScore + 1);
      gameContainer.removeChild(circle);
    });

    setTimeout(() => gameContainer.removeChild(circle), 800);
  };

  const updateScore = () => {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.textContent = "Score : " + score;
    }
  };

  const handleButtonClick = () => {
    if (buttonText === "Start") {
      const id = setInterval(createCircle, 500);
      setIntervalId(id); // Store interval id in state
      setButtonText("Pause");
    } else if (buttonText === "Pause") {
      clearInterval(intervalId); // Clear interval when paused
      setButtonText("Save");
    } else if (buttonText === "Save") {
      saveScore();
    }
  };

  const saveScore = () => {
    const previousScores = JSON.parse(localStorage.getItem("previousScores")) || [];
    previousScores.push(score);
    localStorage.setItem("previousScores", JSON.stringify(previousScores));
    setButtonText("Start");
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-between mt-28 pr-10 pl-10 md:pr-16 md:pl-16 gap-3 pb-3">
      <div
        className="relative p-5 bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 h-[60vh] w-full"
        id="game-container"
      />
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-6 gap-2">
        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 w-full md:w-80 rounded-3xl scale-90 transition-all text-xl active:scale-100 font-bold font-serif"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
        <div className="flex justify-center items-center gap-5">
          <p className="md:text-3xl text-lg text-slate-400" id="score" />
          <PreviousScore />
        </div>
      </div>
    </div>
  );
};

export default Board;
