import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageOverlayProps {
  selectedImageIndex: number;
  images: string[];
  handleCloseOverlay: () => void;
  handleNextImage: () => void;
  handlePrevImage: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  selectedImageIndex,
  images,
  handleCloseOverlay,
  handleNextImage,
  handlePrevImage
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <button
        className="absolute top-4 right-4 h-full w-full z-0 text-white"
        onClick={handleCloseOverlay}
      >
        {/* <X size={32} /> */}
      </button>

      <button
        className="absolute left-4 text-white"
        onClick={handlePrevImage}
      >
        <ChevronLeft size={48} />
      </button>

      <img src={images[selectedImageIndex]} className="max-h-[90vh] max-w-[90vw] object-contain relative z-10" />
      
      <button
        className="absolute right-4 text-white"
        onClick={handleNextImage}
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default ImageOverlay;