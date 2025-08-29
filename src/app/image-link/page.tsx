"use client";
import { Input, Switch } from "antd";
import { useState } from "react";

import { ButtonCopy } from "@/shared/ui";
import { remakeImageLink } from "@/shared/utils/utils";
import { Result } from "@/widgets";

export default function ImageLink() {
  const [textarea, setTextarea] = useState<string>("");
  const [numberScr, setNumberScr] = useState<string>("");
  const [lint, setLink] = useState<string>("");

  const [whitespace, setWhitespace] = useState(false);
  const [pdf, setPdf] = useState(false);
  const [center, setCenter] = useState(false);

  const handelWhitespace = () => {
    setWhitespace((s) => !s);
  };

  const handelPdf = () => {
    setPdf((s) => !s);
  };

  const handelCenter = () => {
    setCenter((s) => !s);
  };

  return (
    <>
      <div className="flex gap-[10px] m-auto justify-center mt-[20px]">
        <label className="flex gap-[5px]">
          Пробелы
          <Switch onChange={handelWhitespace} />
        </label>
        <label className="flex gap-[5px]">
          pdf
          <Switch onChange={handelPdf} />
        </label>
        <label className="flex gap-[5px]">
          center
          <Switch onChange={handelCenter} />
        </label>
      </div>

      <div className="w-[40%] m-auto mt-[40px] flex flex-col gap-[20px]">
        <Input
          placeholder="номер ссылки"
          onChange={(e) => setNumberScr(e.target.value)}
        />
        <Input
          placeholder="название сслыки"
          onChange={(e) => setTextarea(e.target.value)}
        />
        <Input placeholder="ссылка" onChange={(e) => setLink(e.target.value)} />
        <Result
          text={remakeImageLink(
            numberScr,
            lint,
            textarea,
            pdf,
            center,
            whitespace
          )}
        />
        <ButtonCopy
          label=""
          copy={remakeImageLink(
            numberScr,
            lint,
            textarea,
            pdf,
            center,
            whitespace
          )}
        />
      </div>
    </>
  );
}
