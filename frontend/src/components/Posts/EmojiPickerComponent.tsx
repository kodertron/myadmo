import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { useRef } from "react";
import { useClickAway } from 'react-use';

interface EmojiPickerComponentProps {
  onEmojiClick: (emojiData: EmojiClickData) => void;
  showEmojiPicker: boolean;
  setShowEmojiPicker: (show: boolean) => void;
}

const EmojiPickerComponent = ({ onEmojiClick, showEmojiPicker, setShowEmojiPicker }: EmojiPickerComponentProps) => {
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useClickAway(emojiPickerRef, () => {
    setShowEmojiPicker(false);
  });

  return (
    showEmojiPicker && (
      <div ref={emojiPickerRef} className="absolute top-[55%] left-0 right-0 z-10">
        <EmojiPicker
          previewConfig={{ showPreview: false }}
          autoFocusSearch={false}
          onEmojiClick={onEmojiClick}
          theme={document.documentElement.classList.contains('dark') ? Theme.DARK : Theme.LIGHT}
          className="w-full dark:bg-slate-900"
          width={"100%"}
        />
      </div>
    )
  );
};

export default EmojiPickerComponent;