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
  placeholder: string;
}

export const Textarea = ({
  onRefactor,
  text,
  description,
  placeholder,
  img,
}: TextareaProps) => {
  return (
    <>
      <div className="w-100 mt-[1rem] mb-[1rem] m-auto flex flex-col gap-[1rem] items-center">
        {img && <Image alt="img" src={img} height={400} />}
        <p>{description}</p>

        <TextArea
          id="TextArea"
          placeholder={placeholder}
          onChange={(e) => onRefactor(e.target.value)}
          style={{ height: "400px" }}
        />
        <Result text={text} />
        <ButtonCopy copy={text} label="" />
      </div>
    </>
  );
};
