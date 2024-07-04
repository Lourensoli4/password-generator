import { useState, useEffect } from "react";
import { ReactComponent as CopyIcon } from "../../assets/images/icon-copy.svg";
import "./Password.scss";

const Password = ({ generatedPassword }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy password:", err);
      setCopySuccess(false);
    }
  };

  useEffect(() => {
    let timer;
    if (copySuccess) {
      timer = setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [copySuccess]);

  return (
    <div className="password__container">
      <input
        id="generatedPassword"
        value={generatedPassword}
        placeholder="P4$5$W0rD!"
        disabled
      />
      <div className="password__copy">
        {copySuccess && <span>copied</span>}
        <button onClick={copyToClipboard}>
          <CopyIcon />
        </button>
      </div>
    </div>
  );
};

export default Password;
