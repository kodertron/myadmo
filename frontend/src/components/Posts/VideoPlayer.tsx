import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
  handleRemoveVideo: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, handleRemoveVideo }) => {
  return (
    <div className="relative mt-2">
      <ReactPlayer 
        url={videoUrl} 
        controls
        className="w-full rounded bg-slate-900"
        height="250px"
        width="100%"
      />
      <button
        className="flex items-center justify-center absolute top-0 right-0 bg-slate-900 text-white rounded-full p-1 h-[20px] w-[20px]"
        onClick={handleRemoveVideo}
      >
        &times;
      </button>
    </div>
  );
};

export default VideoPlayer;