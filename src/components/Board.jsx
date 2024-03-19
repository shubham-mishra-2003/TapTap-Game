const Board = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-28 pr-10 pl-10 md:pr-16 md:pl-16 gap-3">
      <div
        className="relative p-5 bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 h-[60vh] w-full"
        id="game-container"
      >
        <div className="circle" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-6 gap-2">
        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 w-full md:w-80 rounded-3xl scale-90 transition-all text-xl active:scale-100"
          id="start"
        >
          Start
        </button>
        <p className="text-2xl text-slate-400">Score : 0</p>
      </div>
    </div>
  );
};

export default Board;
