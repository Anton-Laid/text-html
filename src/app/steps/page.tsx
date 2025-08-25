"use client";
import { useState } from "react";

import { remakeStep } from "@/shared/utils/utils";
import { FormNumStr } from "@/widgets";
import img from "../../../public/images/step.png";

export default function Steps() {
  const [textarea, setTextarea] = useState<string>("");
  const [numberScr, setNumberScr] = useState<number>(0);

  const handelData = (str: string, num: number) => {
    setTextarea(str);
    setNumberScr(num);
  };

  return (
    <FormNumStr
      img={img}
      labelNumInp="Номер шага"
      labelStrInp="Текст"
      description="Редактор для шагов"
      text={remakeStep(numberScr, textarea)}
      getData={handelData}
    />
  );
}
