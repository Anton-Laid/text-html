import { dataLinks } from "@/shared/utils/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center m-[1rem] gap-[1rem]">
      {dataLinks.map(({ href, id, label }) => (
        <Link href={href} className="cursor-pointer" key={id}>
          {label}
        </Link>
      ))}
    </div>
  );
}
