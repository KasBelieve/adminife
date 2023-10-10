const Card = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col gap-4 bg-white w-full p-6 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
