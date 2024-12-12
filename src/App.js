import './App.css';
import left from './image/left.jpeg';
import right from './image/right.jpeg';
import middle from './image/middle.png';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
function App() {
  const [activeImage, setActiveImage] = useState('middle');

  const handleImageClick = (image) => {
    setActiveImage(activeImage === image ? null : image);
  };
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-100'>
      <div className='flex h-1/2 w-4/5 shadow-lg bg-white rounded-3xl overflow-hidden'>
        <div
          className={`flex-1 h-full relative transition-all duration-500 ${activeImage === 'left' ? 'flex-[2]' : ''}`}
          onClick={() => handleImageClick('left')}
        >
          <img src={left} alt="left" className='h-full w-full object-cover' />
          <div className='absolute top-0 left-0 p-4 text-white text-xl font-bold'>STRENGTH</div>
          <div className={`absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-xl opacity-0 ${activeImage === 'left' ? 'opacity-100' : ''}`}>
            <FaChevronRight />
          </div>
        </div>
        <div
          className={`flex-1 h-full relative transition-all duration-500 ${activeImage === 'middle' ? 'flex-[2]' : ''}`}
          onClick={() => handleImageClick('middle')}
        >
          <img src={middle} alt="middle" className='h-full w-full object-cover' />
          <div className='absolute top-0 left-0 p-4 text-white text-xl font-bold'>MOBILITY</div>
        </div>
        <div
          className={`flex-1 h-full relative transition-all duration-500 ${activeImage === 'right' ? 'flex-[2]' : ''}`}
          onClick={() => handleImageClick('right')}
        >
          <img src={right} alt="right" className='h-full w-full object-cover' />
          <div className='absolute top-0 left-0 p-4 text-white text-xl font-bold'>DRILLS</div>
          <div className={`absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-xl opacity-0 ${activeImage === 'right' ? 'opacity-100' : ''}`}>
            <FaChevronLeft />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
