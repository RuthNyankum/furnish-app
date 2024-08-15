const Statistic = () => {
  return (
    <div className="h-[40vh] bg-[#00d1d3] flex flex-col justify-center items-center">
      <p className="text-[14px] text-gray-500">GREAT REVIEW FOR OUR SERVICES</p>
      <h3 className="font-bold text-[32px]">Technical Review</h3>
      <div className="flex gap-x-28 mt-14">
        <div className="flex flex-col items-center">
          <p className="text-[36px] font-bold">20</p>
          <p className="text-[16px] text-gray-500 font-semibold">
            YEARS OF EXPERIENCE
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[36px] font-bold">1000</p>
          <p className="text-[16px] text-gray-500 font-semibold">
            SATISFIED CUSTOMERS
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[36px] font-bold">857</p>
          <p className="text-[16px] text-gray-500 font-semibold">
            COMPLETED PROEJECTS
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[36px] font-bold">17</p>
          <p className="text-[16px] text-gray-500 font-semibold">GET AWARDS</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
