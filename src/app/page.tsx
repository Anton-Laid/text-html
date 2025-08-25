"use client";
import Link from "next/link";
import { useState } from "react";

import { dataLinks } from "@/shared/utils/constants";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedColor, setCopiedColor] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("<p>&nbsp;</p>");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  };

  const handleCopyColor = async () => {
    try {
      await navigator.clipboard.writeText("#4c526d");
      setCopiedColor(true);
      setTimeout(() => setCopiedColor(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  };

  return (
    <div className="flex flex-col items-center m-[1rem] gap-[1rem]">
      {dataLinks.map(({ href, id, label }) => (
        <Link href={href} className="cursor-pointer" key={id}>
          {label}
        </Link>
      ))}

      <button onClick={handleCopy} className="border-2 p-[0.5rem] rounded-sm">
        {copied ? "Пробел скопирован" : "Скопировать пробел"}
      </button>

      <button
        onClick={handleCopyColor}
        className="border-2 p-[0.5rem] rounded-sm"
      >
        {copiedColor ? "#4c526d скопирован" : "Скопировать #4c526d"}
      </button>
    </div>
  );
}
