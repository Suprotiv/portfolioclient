import React from 'react';

function Buttons({ text, size, isSelected }) {
  const paddingClasses = size === 'sm' ? 'py-2 px-2' : 'py-3 md:py-4 px-4 md:px-6';
  const fontSizeClasses = size === 'sm' ? 'text-sm' : 'text-xl';
  
  // Apply a different background color when the button is selected
  const selectedHeight = isSelected ? 'h-full w-[1px]' : 'w-0 h-0';
  const selectedWidth = isSelected ? 'w-full h-[1px]' : 'w-0 h-0';

  return (
    <button
      className={`relative group font-bold border-none tracking-wide transition-all duration-500 ${paddingClasses} ${fontSizeClasses} `}
    >
      {text}
      
      <span
        className={`absolute top-0 left-0 bg-[#1fd1ff] transition-all duration-700 ${
          size === 'sm' ?`${selectedWidth} ` : 'w-5 h-0.5 group-hover:w-full group-hover:h-0.5'
        }`}
      ></span>
      <span
        className={`absolute top-0 left-0 bg-[#1fd1ff] transition-all duration-700 ${
          size === 'sm' ? `${selectedHeight} ` : 'w-0.5 h-5 group-hover:h-full group-hover:w-0.5'
        }`}
      ></span>

      <span
        className={`absolute bottom-0 right-0 bg-[#1fd1ff] transition-all duration-700 ${
          size === 'sm' ? `${selectedWidth}` : 'w-5 h-0.5 group-hover:w-full group-hover:h-0.5'
        }`}
      ></span>
      <span
        className={`absolute bottom-0 right-0 bg-[#1fd1ff] transition-all duration-700 ${
          size === 'sm' ? `${selectedHeight} ` : 'w-0.5 h-5 group-hover:h-full group-hover:w-0.5'
        }`}
      ></span>
    </button>
  );
}

export default Buttons;
