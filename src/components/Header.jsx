const Header = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full bg-black pr-6 pl-6 p-3 border-b-2 rounded-b-xl z-10">
      <img
        src="./logo.png"
        width="70vw"
        className="rounded-full border-2 border-white"
      />
      <h1 className="flex flex-col items-end md:text-3xl text-lg md:gap-2 font-bold">
        Tap Tap Game <span className="text-[9px] font-bold text-gray-400 md:text-sm">By Connect | shubham mishra</span>
      </h1>
    </div>
  );
};

export default Header;
