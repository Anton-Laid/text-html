"use client";
import { useState } from "react";

import { remakeTextInHTMLUlLi } from "@/shared/utils/utils";
import { Textarea } from "@/widgets";

const st = `Наименование объекта НФА 
Инвентарный номер
Дата перемещения
Ответственный за перемещение
Сотрудник, который получил объект НФА
Сотрудник, который передал объект НФА
Подпись ответственных лиц`;

export default function () {
  const [textarea, setTextarea] = useState<string>("");

  return (
    <Textarea
      description="Вставить данные для списка"
      onRefactor={setTextarea}
      text={remakeTextInHTMLUlLi(textarea)}
    />
  );
}
