import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const PreviousScore = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen &&
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-0">
          <div className="bg-gray-200 p-4 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
            <span
              className="cursor-pointer hover:bg-neutral-500 absolute top-0 right-0 rounded-lg"
              onClick={closeModal}
            >
              <CloseIcon />
            </span>
            <div className="mt-4">
              <h1 className="md:text-3xl">Previous Scores :</h1>
              <ul className="list-disc pl-4">
                <li className="mt-2">1st - 100</li>
                <li className="mt-2">2nd - 100</li>
                <li className="mt-2">3rd - 100</li>
                <li className="mt-2">4th - 100</li>
                <li className="mt-2">5th - 100</li>
                <li className="mt-2">6th - 100</li>
              </ul>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default PreviousScore;
