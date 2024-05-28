const IconContainer = ({ icon, onClick, className }) => {
  return (
    <div
      className={`cursor-pointer hover:text-gray-500 ${className}`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
export default IconContainer;
