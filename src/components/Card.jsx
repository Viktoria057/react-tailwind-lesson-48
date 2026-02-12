const Card = ({ title, text }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  };
  
  export default Card;
  