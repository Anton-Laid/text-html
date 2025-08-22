import Image from "next/image";
import { useEffect, useState } from "react";

import { ButtonBack } from "@/shared/ui";
import type { StaticImageData } from "next/image";
import { ResultText } from "../result-text";

interface FormNumStrProps {
  img: StaticImageData;
  description: string;
  labelNumInp: string;
  labelStrInp: string;
  text: string;
  getData: (str: string, num: number) => void;
}

export const FormNumStr = ({
  img,
  description,
  labelNumInp,
  labelStrInp,
  text,
  getData,
}: FormNumStrProps) => {
  const [textarea, setTextarea] = useState<string>("");
  const [numberScr, setNumberScr] = useState<number>(0);

  useEffect(() => {
    getData(textarea, numberScr);
  }, [textarea, numberScr]);

  return (
    <form>
      <ButtonBack />

      <div className="w-full flex flex-col gap-10 items-center mt-[2rem]">
        <Image alt="img" src={img} />
        <p>{description}</p>
        <label className="flex gap-10 items-center" id="1">
          {labelNumInp}
          <input
            type="number"
            onChange={(e) => setNumberScr(+e.target.value)}
            className="border-2 border-solid p-[0.5rem] rounded-sm"
            id="1"
            name="1"
          />
        </label>
        <label className="flex gap-10 items-center" id="2">
          {labelStrInp}
          <input
            type="text"
            className="border-2 border-solid p-[0.5rem] rounded-sm"
            onChange={(e) => setTextarea(e.target.value)}
            id="2"
            name="2"
          />
        </label>
        <ResultText text={text} />
      </div>
    </form>
  );
};
