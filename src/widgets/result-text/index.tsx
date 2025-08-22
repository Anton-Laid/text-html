import { useState } from "react";

interface ResultTextProps {
  text: string;
}

export const ResultText = ({ text }: ResultTextProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  };

  return (
    <>
      <p className="w-[60%]">{text}</p>
      <button onClick={handleCopy} className="border-2 p-[0.5rem] rounded-sm">
        {copied ? "Скопировано!" : "Скопировать текст"}
      </button>
    </>
  );
};
