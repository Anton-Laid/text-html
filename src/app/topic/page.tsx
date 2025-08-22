"use client";
import { useState } from "react";

import { remakeTopic } from "@/shared/utils/utils";
import { Textarea } from "@/widgets";
import img from "../../../public/images/topic.jpeg";

export default function Topic() {
  const [textarea, setTextarea] = useState<string>("");

  return (
    <Textarea
      img={img}
      description="Заполнение подтемы"
      onRefactor={setTextarea}
      text={remakeTopic(textarea)}
    />
  );
}
