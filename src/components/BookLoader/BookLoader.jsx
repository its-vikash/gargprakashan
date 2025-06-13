import React from 'react';

const BookLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="book relative w-[32px] h-[12px] mt-[32px] scale-150">
        <div className="inner absolute w-[32px] h-[12px] origin-[2px_2px] rotate-[-90deg] animate-book">
          <div className="left absolute w-[60px] h-[4px] top-0 right-[28px] origin-[58px_2px] rotate-90 rounded-[2px] bg-black animate-left before:content-[''] before:absolute before:w-[48px] before:h-[4px] before:top-[-10px] before:left-[6px] before:rounded-[2px] before:bg-inherit" />
          <div className="middle w-[32px] h-[12px] border-[4px] border-black border-t-0 rounded-b-[9px] translate-y-[2px]" />
          <div className="right absolute w-[60px] h-[4px] top-0 left-[28px] origin-[2px_2px] rotate-[-90deg] rounded-[2px] bg-black animate-right before:content-[''] before:absolute before:w-[48px] before:h-[4px] before:top-[-10px] before:left-[6px] before:rounded-[2px] before:bg-inherit" />
        </div>
        <ul className="absolute list-none p-0 m-0 left-1/2 top-0">
          {[...Array(19)].map((_, i) => (
            <li 
              key={i}
              className="absolute h-[4px] rounded-[2px] origin-[100%_2px] w-[48px] right-0 top-[-10px] rotate-0 translate-x-[-18px] bg-black"
              style={{ 
                animationName: `page-${i}`,
                animationDuration: '6.8s',
                animationTimingFunction: 'ease',
                animationIterationCount: 'infinite'
              }}
            />
          ))}
        </ul>
      </div>

      <style jsx>{`
        .book {
          --color: #000;
          --duration: 6.8s;
        }
        @keyframes book {
          4% { transform: rotateZ(-90deg); }
          10%, 40% { transform: rotateZ(0deg); transform-origin: 2px 2px; }
          40.01%, 59.99% { transform-origin: 30px 2px; }
          46%, 54% { transform: rotateZ(90deg); }
          60%, 90% { transform: rotateZ(0deg); transform-origin: 2px 2px; }
          96% { transform: rotateZ(-90deg); }
        }
        @keyframes left {
          4% { transform: rotateZ(90deg); }
          10%, 40% { transform: rotateZ(0deg); }
          46%, 54% { transform: rotateZ(90deg); }
          60%, 90% { transform: rotateZ(0deg); }
          96% { transform: rotateZ(90deg); }
        }
        @keyframes right {
          4% { transform: rotateZ(-90deg); }
          10%, 40% { transform: rotateZ(0deg); }
          46%, 54% { transform: rotateZ(-90deg); }
          60%, 90% { transform: rotateZ(0deg); }
          96% { transform: rotateZ(-90deg); }
        }
        ${[...Array(19)].map((_, i) => `
          @keyframes page-${i} {
            ${(4 + i * 1.86).toFixed(2)}% { transform: rotateZ(0deg) translateX(-18px); }
            ${(13 + i * 1.86).toFixed(2)}%, ${(54 + i * 1.86).toFixed(2)}% { transform: rotateZ(180deg) translateX(-18px); }
            ${(63 + i * 1.86).toFixed(2)}% { transform: rotateZ(0deg) translateX(-18px); }
          }
        `).join('')}
        .animate-book { animation: book var(--duration) ease infinite; }
        .animate-left { animation: left var(--duration) ease infinite; }
        .animate-right { animation: right var(--duration) ease infinite; }
      `}</style>
    </div>
  );
};

export default BookLoader;