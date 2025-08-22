"use client";
import { useState } from "react";

import { remakeTextInHTMLUlLi } from "@/shared/utils/utils";
import { Textarea } from "@/widgets";
import img from "../../../public/images/ul.jpeg";

export default function Ul() {
  const [textarea, setTextarea] = useState<string>("");

  return (
    <Textarea
      img={img}
      description="Вставить данные для списка, текст не должен быть в одну строку. Пукт enter, пукт enter"
      onRefactor={setTextarea}
      text={remakeTextInHTMLUlLi(textarea)}
    />
  );
}
