import React from 'react';
import { Eye } from "lucide-react";

interface ImageItemProps {
  image: string;
  index: number;
  handleImageClick: (index: number) => void;
  handleRemoveImage: (index: number) => void;
  handleShowAll: () => void;
  showAll: boolean;
  imagesLength: number;
}

const ImageItem: React.FC<ImageItemProps> = ({
  image,
  index,
  handleImageClick,
  handleRemoveImage,
  handleShowAll,
  showAll,
  imagesLength
}) => {
  return (
    <div key={image} className="relative h-full bg-slate-900">
      <img
        src={image}
        className="h-full w-full object-cover cursor-pointer"
        onClick={() => handleImageClick(index)}
      />
      <button
        className="flex items-center justify-center absolute top-0 right-0 bg-slate-900 text-white h-[20px] w-[20px] rounded-full p-1"
        onClick={() => handleRemoveImage(index)}
      >
        &times;
      </button>
      {index === 4 && imagesLength > 5 && !showAll && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center cursor-pointer"
          onClick={handleShowAll}
        >
          <Eye size={48} color="white" />
        </div>
      )}
    </div>
  );
};

export default ImageItem;