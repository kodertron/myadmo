import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const HorizontalScroller = ({ children }: any) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="w-full relative">
        {/* controls */}
        <div
          className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center justify-center w-[35px] h-[35px] bg-white dark:bg-slate-900 dark:border-slate-800 z-10 rounded-full scale-90 border border-black border-opacity-5 cursor-pointer"
          onClick={scrollLeft}
        >
          <ChevronLeft size={20} />
        </div>
        <div
          className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center justify-center w-[35px] h-[35px] bg-white dark:bg-slate-900 dark:border-slate-800 z-10 rounded-full scale-90 border border-black border-opacity-5 cursor-pointer"
          onClick={scrollRight}
        >
          <ChevronRight size={20} />
        </div>

        {/* video scroller */}
        <div className="overflow-x-scroll scrollbar-none" ref={scrollContainerRef}>
          <div className="w-max flex gap-4 mt-4">
            {children}
            {/* Add more items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;