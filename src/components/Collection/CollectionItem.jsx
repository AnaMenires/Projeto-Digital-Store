const CollectionItem = ({ className, title }) => {
  return (
    <div
      className={`bg-cover bg-center w-[380px] h-[230px] rounded-lg shadow-md flex flex-col justify-between p-4 ${className}`}
    >
      <div className="bg-[#e7ff86] rounded-lg w-[80px] h-[32px] flex items-center justify-center text-xs font-medium">
        {title}
      </div>
      <button
        className="bg-[#f5f5f5] text-[#c92071] w-[120px] px-4 h-[32px] rounded font-inter font-semibold text-sm flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#c92071] hover:text-white"
      >
        Comprar
      </button>
    </div>
  );
};

export default CollectionItem;