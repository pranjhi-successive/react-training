import React, { useState, useCallback } from "react";
const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = useCallback((text) => {
    if (text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy"); 
      document.body.removeChild(textArea);
      setCopied(true);
    }
  }, []);
  

  const reset = useCallback(() => {
    setCopied(false);
  }, []);

  return { copied, copyToClipboard, reset };
};
const CopyToClipboardButton = ({ text }) => {
  const { copied, copyToClipboard, reset } = useClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard(text)}>Copy to Clipboard</button>
      {copied && <span>Copied to clipboard!</span>}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CopyToClipboardButton;
