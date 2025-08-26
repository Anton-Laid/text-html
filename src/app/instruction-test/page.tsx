"use client";
import Image from "next/image";

import { ButtonCopy } from "@/shared/ui";
import { textInstructionTest } from "@/shared/utils/constants";
import img from "../../../public/images/instruction-test.png";

export default function InstructionTest() {
  return (
    <div className="flex flex-col items-center gap-[1rem]">
      <Image src={img} alt="img" width={500} />
      <ButtonCopy copy={textInstructionTest} label="" />
    </div>
  );
}
