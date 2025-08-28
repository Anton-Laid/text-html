"use client";
import { Switch } from "antd";
import { useState } from "react";

import {
  remakeTextInHTMLUlLi,
  remakeTextNumbersHTMLUlLi,
} from "@/shared/utils/utils";
import { Textarea } from "@/widgets";
import img from "../../../public/images/ul.jpeg";

export default function Ul() {
  const [textarea, setTextarea] = useState<string>("");
  const [isAction, setIsAction] = useState<boolean>(false);

  const onChange = () => {
    setIsAction((s) => !s);
  };

  return (
    <div className="w-[80%] m-auto flex flex-col">
      <div className="m-auto mt-[20px] flex gap-[10px] flex-col items-center">
        <div className="flex gap-[10px]">
          <p>Нумерация</p>
          <p>Маркеры</p>
        </div>
        <Switch
          value={isAction}
          defaultChecked
          onChange={onChange}
          className="w-[40px] m-auto"
        />
      </div>
      {isAction ? (
        <Textarea
          placeholder="Пункт enter, пункт enter"
          img={img}
          description="Вставить данные для списка, текст не должен быть в одну строку."
          onRefactor={setTextarea}
          text={remakeTextInHTMLUlLi(textarea)}
        />
      ) : (
        <Textarea
          placeholder="Пункт enter, пункт enter"
          img={img}
          description="Вставить данные для списка, текст не должен быть в одну строку."
          onRefactor={setTextarea}
          text={remakeTextNumbersHTMLUlLi(textarea)}
        />
      )}
    </div>
  );
}
