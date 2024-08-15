import React from 'react';

const ProductionComponent = ({ title, text, icon }) => {
  return (
    <div>
      <div>
        <div className="h-[180px] w-[180px] bg-[#00D1D3] rounded-full flex justify-center items-center ml-16 ">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductionComponent;
