"use client";
import { ButtonBack } from "@/shared/ui";
import { remakeTableImage } from "@/shared/utils/utils";
import { ResultText } from "@/widgets";
import { useState } from "react";

export default function ImageTable() {
  const [textarea, setTextarea] = useState<string>("");
  const [numberScr, setNumberScr] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-10 items-center mt-[2rem]">
      <ButtonBack />
      <label className="flex gap-10 items-center" id="1">
        Номер скрина
        <input
          type="number"
          onChange={(e) => setNumberScr(+e.target.value)}
          className="border-2 border-solid p-[0.5rem] rounded-sm"
          id="1"
          name="1"
        />
      </label>
      <label className="flex gap-10 items-center" id="2">
        Номер скрина
        <input
          type="text"
          className="border-2 border-solid p-[0.5rem] rounded-sm"
          onChange={(e) => setTextarea(e.target.value)}
          id="2"
          name="2"
        />
      </label>
      <ResultText text={remakeTableImage(numberScr, textarea)} />
    </div>
  );
}
