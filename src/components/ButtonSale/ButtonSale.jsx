const ButtonSale = ({ title, className }) => {
  return (
    <div>
      <button
        className={`bg-[#c92071] w-[170px] h-[35px] md:w-[190px] md:h-[40px] cursor-pointer rounded-md text-white text-sm md:text-base mt-3 flex items-center justify-center transition duration-300 hover:brightness-110 ${className}`}>
        {title}
      </button>
    </div>
  );
};

export default ButtonSale;
