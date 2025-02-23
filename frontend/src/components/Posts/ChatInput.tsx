import React, { useState, ChangeEvent, SetStateAction } from 'react';
import { Send, Smile } from "lucide-react";
import AutoGrowingTextarea from "./AutoGrowingTextarea";
import EmojiPickerComponent from "./EmojiPickerComponent";
import FileUpload from "./FileUpload";
import { EmojiClickData } from "emoji-picker-react";
import MediaGrid from './MediaGrid';
import VideoPlayer from './VideoPlayer';
import { TextIconSm } from "../Buttons";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage(message + emojiData.emoji);
  };

  const handleSend = () => {
    // Handle sending the message
    console.log("Message sent:", message);
    setMessage("");
    setUploadedImages([]);
    setUploadedVideo(null);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
      setUploadedImages(fileArray);
      setUploadedVideo(null); // Clear video when images are uploaded
    }
  };

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedVideo(URL.createObjectURL(file));
      setUploadedImages([]); // Clear images when a video is uploaded
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleRemoveVideo = () => {
    setUploadedVideo(null);
  };

  return (
    <div className="relative">
      <div className="py-3">
        <div className="input rounded-xl border dark:border-slate-800 flex flex-col relative">
          <AutoGrowingTextarea
            className="dark:bg-slate-900 rounded-xl p-3 outline-none h-[50px] resize-none"
            placeholder="Write a comment..."
            value={message}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setMessage(e.target.value)}
          />
          <div
            className="absolute top-0 right-0 h-full flex items-center justify-center px-3 cursor-pointer text-gray-500 hover:text-yellow-400"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <Smile size={20} strokeWidth={2.4} />
          </div>
        </div>
        <div className="w-full flex items-center justify-end mt-1.5 gap-1.5">
          <FileUpload handleImageUpload={handleImageUpload} handleVideoUpload={handleVideoUpload} />
          <div>
            <TextIconSm icon={<Send size={16} strokeWidth={2.4} />} text="Send" onClick={handleSend} />
          </div>
        </div>
        {uploadedImages.length > 0 && <MediaGrid images={uploadedImages} handleRemoveImage={handleRemoveImage} />}
        {uploadedVideo && <VideoPlayer videoUrl={uploadedVideo} handleRemoveVideo={handleRemoveVideo} />}
      </div>
      <EmojiPickerComponent
        onEmojiClick={handleEmojiClick}
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
      />
    </div>
  );
};

export default ChatInput;