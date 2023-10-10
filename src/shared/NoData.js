const NoData = ({ type }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[300px] max-md:w-[220px]">
        <p className="text-[14px]">{type}</p>
      </div>
    </div>
  );
};

export default NoData;
