"use client";
import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

import {
  remakeAnimationText,
  remakeTableConst,
  remakeTableDrawing,
  remakeTableImage,
  remakeThree,
  remakeWhitespaceImageText,
} from "@/shared/utils/utils";
import { FormNumStr, TableConstructor } from "@/widgets";
import img from "../../../public/images/img-table.png";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  margin: "20px auto",
};

export default function ImageTable() {
  const [textarea, setTextarea] = useState<string>("");
  const [numScreenshots, setNumScreenshots] = useState(0);
  const [value, setValue] = useState(1);
  const [data, setData] = useState<{ num: string; str: string }>({
    num: "",
    str: "",
  });

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleData = (num: string, str: string) => {
    setData({ num, str });
  };

  const handelData = (str: string, num: number) => {
    setTextarea(str);
    setNumScreenshots(num);
  };
  console.log(value);

  return (
    <div
      className="flex flex-col w-[60%] items-start m-auto
     mb-[50px]"
    >
      <Radio.Group
        style={style}
        onChange={onChange}
        value={value}
        options={[
          { value: 1, label: "Скриншот" },
          { value: 2, label: "Обычная таблица" },
          { value: 3, label: "Только подпись таблицы" },
          { value: 4, label: "Только подпись рисунка" },
          { value: 5, label: "Только анимированного рисунка" },
        ]}
      />

      {(() => {
        switch (value) {
          case 1:
            return (
              <FormNumStr
                img={img}
                placeholderOne="Номер"
                labelNumInp="Номер скриншота"
                labelStrInp="Название скриншота"
                placeholderTwo="Название"
                description="Редактор для шагов"
                text={remakeTableImage(numScreenshots, textarea)}
                getData={handelData}
              />
            );
          case 2:
            return (
              <TableConstructor
                getData={handleData}
                text={remakeTableConst(data.num, data.str)}
                numTable="Номер таблицы"
                strTable="Описание таблицы"
              />
            );
          case 3:
            return (
              <TableConstructor
                getData={handleData}
                text={remakeThree(data.num, data.str)}
                numTable="Номер таблицы"
                strTable="Описание таблицы"
              />
              // <FormNumStr
              //   img={img}
              //   placeholderOne="Номер"
              //   labelNumInp="Номер таблицы"
              //   labelStrInp="Название таблицы"
              //   placeholderTwo="Название"
              //   description="Редактор для Таблицы"
              //   text={remakeTable(numScreenshots, textarea)}
              //   getData={handelData}
              // />
            );
          case 4:
            return (
              <TableConstructor
                getData={handleData}
                text={remakeWhitespaceImageText(data.num, data.str)}
                numTable="Номер таблицы"
                strTable="Описание таблицы"
              />
            );
          case 5:
            return (
              <TableConstructor
                getData={handleData}
                text={remakeAnimationText(data.num, data.str)}
                numTable="Номер таблицы"
                strTable="Описание таблицы"
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
