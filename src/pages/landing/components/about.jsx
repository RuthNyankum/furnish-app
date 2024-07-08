import { aboutImage } from '../../../assets';

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutImage})`,
        position: 'relative',
        height: '700px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
      className="mt-4 h-[70%] w-full"
    >
      {/* <img src={aboutImage} alt="" /> */}

      <div className="absolute bottom-32 right-[400px] m-4 p-5 bg-white bg-opacity-80 rounded-lg max-w-md w-full flex flex-col items-start">
        <h2 className="text-lg font-bold text-gray-700">About the Studio</h2>
        <h1 className="text-4xl font-bold text-gray-900 my-4">
          Quality Makes the Belief for Customers
        </h1>
        <p className="text-gray-600 mb-4">
          Our expertise, creativity, and technical skills will significantly
          enhance the quality and impact of your photographs. While smartphones
          and amateur cameras can capture moments adequately. Choosing a
          photography studio ensures a professional, high-quality, and
          customized photography experience.
        </p>
        <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-colors">
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default About;

// import React from 'react';
// import aboutImage from '../../../assets/images/about.webp';

// const About = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center-left h-[500px] w-full mt-4"
//       style={{
//         backgroundImage: `url(${aboutImage})`,
//       }}
//     >
//       <div className="flex items-center justify-center h-full">
//         <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-4xl w-full flex flex-col md:flex-row md:items-center">
//           <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
//             <h2 className="text-lg font-bold text-gray-700">About Furnish</h2>
//             <h1 className="text-4xl font-bold text-gray-900 my-4">
//               Quality Makes the Belief for Customers
//             </h1>
//             <p className="text-gray-600 mb-4">
//               Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live in Bookmarksgrove right at the coast of the Semantics, a
//               large language ocean.
//             </p>
//             <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-colors">
//               Watch Video
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src={aboutImage}
//               alt="Hero"
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
