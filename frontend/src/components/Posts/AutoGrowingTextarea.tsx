import { useRef, useEffect, useState } from "react";

const AutoGrowingTextarea = ({ ...props }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to recalculate
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; // Set new height
    }
  }, [text]); // Runs every time `text` changes

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type here..."
      rows={1} // Initial rows
      style={{
        width: "100%",
        minHeight: "40px",
        padding: "10px",
        fontSize: "16px",
        resize: "none",
        overflow: "hidden",
      }}
      {...props}
    />
  );
};

export default AutoGrowingTextarea;