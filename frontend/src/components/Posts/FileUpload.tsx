import { Film, Image } from "lucide-react";
import { ChangeEvent } from "react";

interface FileUploadProps {
  handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  handleVideoUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ handleImageUpload, handleVideoUpload }: FileUploadProps) => {
  return (
    <div className="cursor-pointer text-gray-500 flex items-center gap-2">
      <label className="hover:text-blue-500 cursor-pointer">
        <Image size={20} strokeWidth={2.4} className="" />
        <input type="file" accept="image/*" multiple onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && file.type.startsWith('image/')) {
              handleImageUpload(e);
          }
        }} className="hidden" />
      </label>
      <label className="hover:text-blue-500 cursor-pointer">
        <Film size={20} strokeWidth={2.4} className="" />
        <input type="file" accept="video/*" multiple onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && file.type.startsWith('video/')) {
              handleVideoUpload(e);
          }
        }} className="hidden" />
      </label>
    </div>
  );
};

export default FileUpload;