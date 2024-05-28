const ButtonPrimary = ({ style, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 rounded-md px-2 cursor-pointer select-none bg-cyan-500 hover:bg-cyan-800 hover:text-cyan-300 hover:border-gray-400 transition-all duration-200 font-bold text-xl ${style}`}
    >
      {children}
    </button>
  );
};
export default ButtonPrimary;
