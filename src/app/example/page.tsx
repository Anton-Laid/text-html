"use client";
import { useState } from "react";

import { remakeMarginLeftText } from "@/shared/utils/utils";
import { Textarea } from "@/widgets";
import img from "../../../public/images/example.png";

export default function Example() {
  const [textarea, setTextarea] = useState<string>("");

  return (
    <Textarea
      img={img}
      description="Отступ для текста"
      onRefactor={setTextarea}
      text={remakeMarginLeftText(textarea)}
    />
  );
}
