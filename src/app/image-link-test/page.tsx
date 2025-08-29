"use client";
import { useState } from "react";

import { remakeImageLinkTest } from "@/shared/utils/utils";
import { Textarea } from "@/widgets";
import img from "../../../public/images/image-link-test.png";

export default function ImageLinkTest() {
  const [textarea, setTextarea] = useState<string>("");

  return (
    <Textarea
      placeholder=""
      img={img}
      description="Заполнение подтемы"
      onRefactor={setTextarea}
      text={remakeImageLinkTest(textarea)}
    />
  );
}
