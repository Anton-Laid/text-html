"use client";
import { ButtonCopy } from "@/shared/ui";
import { dataLinks } from "@/shared/utils/constants";
import { Tag } from "antd";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <ul className="flex justify-around m-[2rem] flex-wrap gap-2">
        {dataLinks.map(({ href, id, label, color }) => (
          <Link key={id} href={href} className="cursor-pointer text-center">
            <Tag color={color}>{label}</Tag>
          </Link>
        ))}
      </ul>
      <div className="flex gap-1 max-[500px]: flex-col">
        <ButtonCopy label="пробел" copy="<p>&nbsp;</p>" />
        <ButtonCopy label="#4c526d" copy="#4c526d" />
      </div>
    </header>
  );
};
