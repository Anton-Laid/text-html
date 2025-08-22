"use client";
import { useState } from "react";

import { remakeImageLink } from "@/shared/utils/utils";
import { FormNumStr } from "@/widgets";
import img from "../../../public/images/image-link.jpeg";

export default function ImageLink() {
  const [textarea, setTextarea] = useState<string>("");
  const [numberScr, setNumberScr] = useState<number>(0);

  const handelData = (str: string, num: number) => {
    setTextarea(str);
    setNumberScr(num);
  };

  return (
    <FormNumStr
      img={img}
      labelNumInp="Ссылка куда мы отправляем пользователя"
      labelStrInp="описание ссылки"
      description="Редактор для шагов"
      text={remakeImageLink(numberScr.toString(), textarea)}
      getData={handelData}
    />
  );
}
