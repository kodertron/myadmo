import React, { useState } from 'react';
import Masonry from 'react-layout-masonry';
import ImageItem from './ImageItem';
import ImageOverlay from './ImageOverlay';

const MediaGrid = ({ images, handleRemoveImage }: { images: string[], handleRemoveImage: (index: number) => void }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseOverlay = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <Masonry 
        columns={{ 640: 3, 768: 3, 1024: 3, 1280: 5 }}
        gap={0}
      >
        {images.slice(0, showAll ? images.length : 5).map((image, index) => (
          <ImageItem
            key={image}
            image={image}
            index={index}
            handleImageClick={handleImageClick}
            handleRemoveImage={handleRemoveImage}
            handleShowAll={handleShowAll}
            showAll={showAll}
            imagesLength={images.length}
          />
        ))}
      </Masonry>

      {selectedImageIndex !== null && (
        <ImageOverlay
          selectedImageIndex={selectedImageIndex}
          images={images}
          handleCloseOverlay={handleCloseOverlay}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
      )}
    </>
  );
};

export default MediaGrid;