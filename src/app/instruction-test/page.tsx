"use client";
import Image from "next/image";
import { useState } from "react";

import { ButtonBack } from "@/shared/ui";
import { textInstructionTest } from "@/shared/utils/constants";
import img from "../../../public/images/instruction-test.png";

export default function InstructionTest() {
  const [copied, setCopied] = useState(false);

  // надо переделать функцию в нее еще текст ставить надо
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textInstructionTest);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-[1rem]">
      <ButtonBack />
      <Image src={img} alt="img" width={500} />
      <button onClick={handleCopy} className="border-2 p-[0.5rem] rounded-sm">
        {copied ? "Скопированно" : "Скопировать"}
      </button>
    </div>
  );
}
