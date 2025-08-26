"use client";
import { ButtonCopy } from "@/shared/ui";

interface ResultTextProps {
  text: string;
}

export const ResultText = ({ text }: ResultTextProps) => {
  return (
    <>
      <p className="w-[60%]">{text}</p>
      <ButtonCopy copy={text} label="" />
    </>
  );
};
