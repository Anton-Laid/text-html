import Link from "next/link";

interface ButtonBackProps {
  label?: string;
}

export const ButtonBack = ({ label }: ButtonBackProps) => {
  return <Link href="/">{label ?? "Назад"}</Link>;
};
