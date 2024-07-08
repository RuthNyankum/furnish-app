import React from 'react';

const CollectionComponent = ({ images, overlayTexts }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-1 row-span-1 relative group">
        <img
          src={images[0]}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{overlayTexts[0]}</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1 relative group">
        <img
          src={images[1]}
          alt="Image 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{overlayTexts[1]}</p>
        </div>
      </div>
      <div className="col-span-2 row-span- relative group">
        <img
          src={images[2]}
          alt="Image 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{overlayTexts[2]}</p>
        </div>
      </div>
      <div className="col-span-2 row-span-1 relative group">
        <img
          src={images[3]}
          alt="Image 4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{overlayTexts[3]}</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1 relative group">
        <img
          src={images[4]}
          alt="Image 5"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{overlayTexts[4]}</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1 relative group">
        <img
          src={images[5]}
          alt="Image 6"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{overlayTexts[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionComponent;
