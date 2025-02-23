import { Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Masonry from 'react-layout-masonry';

const ImageGrid = ({ images }: { images: string[] }) => {
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
            <div key={image} className="relative h-full bg-red-500">
              <img
                src={image}
                className="h-full w-full object-cover cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
              {index === 4 && images.length > 5 && !showAll && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center cursor-pointer"
                  onClick={handleShowAll}
                >
                  <Eye size={48} color="white" />
                </div>
              )}
            </div>
          ))}
        </Masonry>
  
        {selectedImageIndex !== null && (
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
        )}
      </>
    );
};

export default ImageGrid;