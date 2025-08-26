"use client";
import { Input } from "antd";
import Image, { StaticImageData } from "next/image";

import { ButtonCopy } from "@/shared/ui";
import { Result } from "../result";

const { TextArea } = Input;

interface TextareaProps {
  text: string;
  img?: StaticImageData;
  onRefactor: (str: string) => void;
  description: string;
}

export const Textarea = ({
  onRefactor,
  text,
  description,
  img,
}: TextareaProps) => {
  return (
    <>
      <div className="w-100 mt-[1rem] mb-[1rem] m-auto flex flex-col gap-[1rem] items-center">
        {img && <Image alt="img" src={img} height={400} />}
        <h4 className="m-t">Заполнить данные</h4>
        <p>{description}</p>

        <TextArea
          className="h-400px"
          placeholder="text..."
          onChange={(e) => onRefactor(e.target.value)}
        />
        <Result text={text} />

        <ButtonCopy copy={text} label="" />
      </div>
    </>
  );
};
