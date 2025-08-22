import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { ButtonBack } from "@/shared/ui";

interface TextareaProps {
  text: string;
  img?: StaticImageData;
  onRefactor: (str: string) => void;
  description: string;
}

export const Textarea = ({
  onRefactor,
  text,
  description,
  img,
}: TextareaProps) => {
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
      <div className="w-100 mt-[1rem] m-auto flex flex-col gap-[1rem] items-center">
        <ButtonBack />
        {img && <Image alt="img" src={img} height={400} />}
        <h4 className="m-t">Заполнить данные</h4>
        <p>{description}</p>
        <textarea
          className="w-full border-2 border-solid border-amber-900 mt-[1rem] h-50"
          onChange={(e) => onRefactor(e.target.value)}
        ></textarea>
        <p className="w-[60%]">{text}</p>
        <button onClick={handleCopy} className="border-2 p-[0.5rem] rounded-sm">
          {copied ? "Скопировано!" : "Скопировать текст"}
        </button>
      </div>
    </>
  );
};
