import { useState, useEffect } from "react";
import PreviousScore from "./PreviousScore";
import toast from "react-hot-toast";

const Board = () => {
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("Start");
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(
    () => {
      if (timeLeft === 0) {
        clearInterval(intervalId);
        saveScoreAndRefresh();
      }
    },
    [timeLeft, intervalId]
  );

  useEffect(
    () => {
      updateScore();
    },
    [score]
  );

  const createCircle = () => {
    const gameContainer = document.getElementById("game-container");
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = Math.random() * (gameContainer.offsetWidth - 50) + "px";
    circle.style.top = Math.random() * (gameContainer.offsetHeight - 50) + "px";

    gameContainer.appendChild(circle);

    circle.addEventListener("click", () => {
      setScore(prevScore => prevScore + 1);
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
      setIntervalId(id);
      setButtonText("Save");
      startTimer();
    } else if (buttonText === "Save") {
      const previousScores =
        JSON.parse(localStorage.getItem("previousScores")) || [];
      previousScores.push(score);
      localStorage.setItem("previousScores", JSON.stringify(previousScores));
      setButtonText("Start");
      setScore(0);
      setTimeLeft(60);
      clearInterval(intervalId);
      toast.success(`Score saved, your score - ${score}`);
      setTimeout(() => {
        window.location.reload();
      }, 1100);
    }
  };

  const startTimer = () => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    setIntervalId(timerId);
  };

  const saveScoreAndRefresh = () => {
    const previousScores =
      JSON.parse(localStorage.getItem("previousScores")) || [];
    previousScores.push(score);
    localStorage.setItem("previousScores", JSON.stringify(previousScores));
    setButtonText("Start");
    setScore(0);
    setTimeLeft(60);
    toast.error("Oops!! time out");
    setTimeout(() => {
      toast.success(`Score saved, your score - ${score}`);
    }, 1100);
    setTimeout(() => {
      window.location.reload();
    }, 2100);
  };

  return (
    <div className="flex flex-col items-center justify-between mt-28 pr-10 pl-10 md:pr-16 md:pl-16 pb-3">
      <span className="md:text-xl text-lg text-slate-400">
        Time Left : {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })}
      </span>
      <div
        className="relative p-5 bg-gray-700 rounded-b-none rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 h-[60vh] w-full"
        id="game-container"
      />
      <span
        className="md:text-2xl text-center text-lg text-slate-400 bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full rounded-t-none border-t-0"
        id="score"
      />

      <div className="w-full flex justify-between items-center flex-col md:flex-row md:gap-6 mt-2 gap-2">
        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 w-full md:w-80 rounded-3xl scale-90 transition-all text-xl active:scale-100 font-bold font-serif"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
        <PreviousScore />
      </div>
    </div>
  );
};

export default Board;
