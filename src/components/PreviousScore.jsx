import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const PreviousScore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const previousScores = JSON.parse(localStorage.getItem("previousScores")) || [];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="p-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-lg font-bold font-serif"
      >
        Previous Scores
      </button>
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vw] md:w-[30vw] p-0">
          <div className="bg-gray-200 flex justify-between flex-row-reverse gap-4 p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
            <span
              className="mt-[-10px] mr-[-10px] cursor-pointer h-fit hover:bg-neutral-500 rounded-lg"
              onClick={closeModal}
            >
              <CloseIcon />
            </span>
            <div>
              <h1 className="md:text-3xl text-xl font-bold font-serif">Previous Scores :</h1>
              {previousScores.length > 0 ? (
                <ul className="list-disc pl-4">
                  {previousScores.map((score, index) => (
                    <li key={index} className="mt-2 text-xl">{index + 1}st - {score}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">No scores saved yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviousScore;
