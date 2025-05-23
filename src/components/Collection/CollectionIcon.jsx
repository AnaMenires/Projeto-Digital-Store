const CollectionIcon = ({ item, Icon, className = '' }) => {
  return (
    <div>
      <Icon
        size={62}
        className={`text-[#c92071] font-light ${className}`}
      />
      <p className='font-normal text-xs'>
        {item}
      </p>
    </div>
  );
};

export default CollectionIcon;
