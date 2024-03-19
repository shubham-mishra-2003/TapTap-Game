import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const PreviousScore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const previousScores =
    JSON.parse(localStorage.getItem("previousScores")) || [];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getNumberSuffix = index => {
    if (index === 1) return "st";
    else if (index === 2) return "nd";
    else if (index === 3) return "rd";
    else return "th";
  };

  const handleDeleteScores = () => {
    localStorage.removeItem("previousScores");
    alert("All saved scores will be deleted!");
    closeModal();
  };

  return (
    <div className="md:w-fit w-full">
      <button
        onClick={openModal}
        className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4 w-full md:w-80 rounded-3xl scale-90 transition-all text-xl active:scale-100 font-bold font-serif"
      >
        Previous Scores
      </button>
      {isOpen &&
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vw] md:w-[30vw] p-0">
          <div className="bg-gray-200 flex justify-between flex-row-reverse gap-4 p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
            <span
              className="mt-[-10px] mr-[-10px] cursor-pointer h-fit hover:bg-neutral-500 rounded-lg"
              onClick={closeModal}
            >
              <CloseIcon />
            </span>
            <div>
              <h1 className="md:text-3xl text-xl font-bold font-serif">
                Previous Scores :
              </h1>
              {previousScores.length > 0
                ? <ul className="list-disc pl-6 max-h-60 overflow-auto w-full">
                    {previousScores.map((score, index) =>
                      <li key={index} className="mt-2 text-xl">
                        {index + 1}
                        {getNumberSuffix(index + 1)} - {score}
                      </li>
                    )}
                  </ul>
                : <p className="mt-2">No scores saved yet</p>}
            </div>
          </div>
          {previousScores.length > 0
            ? <button
                onClick={handleDeleteScores}
                className="w-full bg-gray-200 rounded-md mt-1 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border p-1 border-gray-100"
              >
                Delete
              </button>
            : null}
        </div>}
    </div>
  );
};

export default PreviousScore;
