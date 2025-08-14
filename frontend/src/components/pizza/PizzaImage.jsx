import { useState } from "react";

import LoadingSpinner from "../ui/LoadingSpinner";

const PizzaImage = ({
  src,
  alt,
  className = "",
  fallbackSrc = "https://via.placeholder.com/400x300?text=Pizza+Image",
  showOverlay = false,
  overlayContent = null,
  enableZoom = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner size="lg" />
        </div>
      )}

      <img
        src={imageSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${enableZoom ? "hover:scale-105" : ""}`}
      />

      {showOverlay && overlayContent && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          {overlayContent}
        </div>
      )}

      {hasError && (
        <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
          Image failed to load
        </div>
      )}
    </div>
  );
};

export default PizzaImage;
