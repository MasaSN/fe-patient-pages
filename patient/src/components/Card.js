const Card = ({ title, children }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    );
  };
  
  export default Card;
  